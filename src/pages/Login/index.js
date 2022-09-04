import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    getRedirectResult,
    signInWithRedirect,
    FacebookAuthProvider
} from "firebase/auth";

import { useRecoilState } from 'recoil';
import {LoginState} from "../../States/LoginStates";

import {ReactComponent as GoogleIcon} from '../../assets/icons/GoogleIcon.svg';
import {ReactComponent as NaverIcon} from '../../assets/icons/NaverIcon.svg';
import {ReactComponent as KakaoIcon} from '../../assets/icons/KakaoIcon.svg';
import {ReactComponent as FaceBookIcon} from '../../assets/icons/FaceBookIcon.svg';


import {Button, 
    LoginForm, 
    LoginInput, 
    LoginDiv, 
    LoginTitle, 
    LoginContainer,
    StyledLink,
    LoginWrapper,
    ImgBtn,
    ImgBtnContainer,
    LoginCheckTitle,
    LoginCheck,
    LoginSocial,
    InfoFindLink,
    LoginWarnSpan
} from './styled';

const Login = () => {
    const history = useNavigate();

    //로그인 상태 확인을 위한 변수
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

    //firebase 로그인을 위한 변수
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const facebookprovider = new FacebookAuthProvider();

    //이메일 로그인
    const signInEmail = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
            setIsLoggedIn(true);
            history('/', {replace:true})
    })
        .catch((error) => {
            alert(error.message);
            console.warn(error.message);
    });
    }

    //구글 로그인(팝업)
    const signInGoogle = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setIsLoggedIn(true);
                history('/', {replace:true})

                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    //구글 로그인(리다이렉트)
    /**
     * @todo /redirect 된 이후 돌아올 페이지 지정해주어야 main으로 감
     */
    const signInGoogleRedirect = () => {
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;

                setIsLoggedIn(true);
                history('/', {replace:true})

            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    // signInWithRedirect(auth, googleprovider);

    //facebook 로그인
    const signInFaceBook = () => {
        signInWithPopup(auth, facebookprovider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                setIsLoggedIn(true);
                history('/', {replace:true})

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });
    }
    //네이버 로그인
    const {naver} = window;

    /**
     * @todo 쿠키 지워야 원활히 작동할 듯
     * @see https://developers.naver.com/docs/login/devguide/devguide.md
     */
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId : process.env.REACT_APP_NAVER_CLIENT_ID,
            callbackUrl : process.env.REACT_APP_NAVER_CALLBACK_URL,
            //팝업창으로 로그인 진행 여부
            isPopup : false,
            //버튼타입
            loginButton : {color : 'green', type : 1, height : 38},
            callbackHandle : true,
        })
        naverLogin.init()

        //로그인한 유저 정보 추출
        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                // 아래처럼 선택하여 추출이 가능하고,
                const useremail = naverLogin.user.getEmail();
                const username = naverLogin.user.getName();
                const usernick = naverLogin.user.getNickName();
                // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
                // setUserInfo(naverLogin.user)
            }
        })
    }
    //네이버 로그인 토큰 추출
    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken();
    };

    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0];
        console.log(token);
        // 로컬 스토리지 || state에 저장하여 사용
        // localStorage.setItem('access_token', token)
        // setGetToken(token)
    }

    // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
    useEffect(() => {
        initializeNaverLogin()
        userAccessToken()
    }, [])

    const loginAccount = (e) => {
        auth
            .login(e.target.txtContent)
            .then(console.log);
    }

    //로그인 유지하기 파트
    const [isChecked, setIsChecked] = useState(false);
    const checkHandler = ({target}) =>{
        setIsChecked(!isChecked);
    };

    //form, input 데이터
    const initialValues = {email : "", password : ""};
    //사용자가 입력 필드에 입력한 데이터 보유
    const [formValues, setFormValues] = useState(initialValues);
    // 각 입력 필드에 대한 오류 보우
    const [formErrors, setFormErrors] = useState({});
    //양식 제출 중인지 여부 추적(Boolean)
    const [isSubmitting, setIsSubmitting] = useState(false);

    //제출된 내용 확인
    const submitForm = () => {
        console.log(formValues);
    };
    //input 입력값 받기
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value});
    };
    //제출 시 오류처리
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };
    //오류 조건 설정 및 제한
    const validate = (values) => {
        let errors = {};

        //정규표현식
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        //이메일 값이 없을 시
        if(!values.email || !values.password) {
            errors.email = "Cannot be blank";
        } 
        //이메일 값이 올바르지 않을 때
        else if (!regex.test(values.email)){
            errors.email = "Invalid email format";
        }

        if(values.password.length < 4){
            errors.password = "Password must be more than 4 chracters";
        }

        return errors;

    };


    //form 값 0, isSubmitting이 false 일 때 submit시 formerror 마운트
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmitting){
            submitForm();
        }
    }, [formErrors]);

    return (
        <LoginDiv className="login">
            <LoginWrapper>
            <LoginTitle>LOGIN</LoginTitle>

            <LoginContainer className='login_container'>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginInput 
                        placeholder="이메일을 입력하세요."
                        value={formValues.email} 
                        onChange={handleChange}
                        type = "email" name="email" id="email"/>
                    {formErrors.email && (
                        <LoginWarnSpan className='error'>{formErrors.email}</LoginWarnSpan>)}
                    
                    <LoginInput 
                        placeholder="비밀번호를 입력하세요."
                        value={formValues.password} 
                        onChange={handleChange}
                        type ="password" name="password" id="password"/>
                    {formErrors.password && (
                    <LoginWarnSpan className='error'>{formErrors.password}</LoginWarnSpan>)}

                    <LoginCheck onClick={()=>setIsChecked(!isChecked)} type="checkbox"/>
                    <LoginCheckTitle>로그인 유지하기</LoginCheckTitle>
                    <InfoFindLink to="/find">아이디/비밀번호</InfoFindLink>
                    <Button type = "submit" onClick={signInEmail} className="login_signInButton">Login</Button>

                    <LoginSocial>SNS로 간편하게 시작하기</LoginSocial>
                    <ImgBtnContainer>
                        <ImgBtn color={"lightgray"} onClick={ () => signInGoogle() }> <GoogleIcon/> </ImgBtn>
                        <div id="naverIdLogin"> <NaverIcon  /> </div>
                        <ImgBtn color={"#f2da3d"}> <KakaoIcon/> </ImgBtn>
                        <ImgBtn onClick={()=> signInFaceBook()}> <FaceBookIcon/> </ImgBtn>

                    </ImgBtnContainer>

                    <StyledLink to ='/signup'>
                        <Button color="#4f4f4f" background="#d1d1d1" className="login_registerButton">Register</Button>
                    </StyledLink>
                </LoginForm>
            </LoginContainer>

            </LoginWrapper>
        </LoginDiv>
    );
};

export default Login;