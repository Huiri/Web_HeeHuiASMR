import React, {useEffect, useState} from 'react';
import googlebtn from "../../assets/img/GoogleBtn.png";
import facebookbtn from "../../assets/img/FaceBookBtn.png";

import {useNavigate} from 'react-router-dom';
import {getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    getRedirectResult,
    // signInWithRedirect,
    FacebookAuthProvider,
    setPersistence,
    browserSessionPersistence

} from "firebase/auth";

import { useSetRecoilState } from 'recoil';
import {LoginState, UserNameState, UserEmailState} from "../../States/LoginStates";


import {
    Button,
    LoginForm,
    LoginInput,
    LoginDiv,
    LoginTitle,
    LoginContainer,
    StyledLink,
    LoginWrapper,
    ImgBtnContainer,
    LoginCheckTitle,
    LoginCheck,
    LoginSocialTitle,
    InfoFindLink,
    LoginWarnSpan,
    LoginSubWrapper, GoogleBtn,FaceBookBtn
} from './styled';

const Login = () => {
    const history = useNavigate();

    const setDisplayName = useSetRecoilState(UserNameState);
    const setUserEmail = useSetRecoilState(UserEmailState);

    //로그인 상태 확인을 위한 변수
    const setIsLoggedIn = useSetRecoilState(LoginState);

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
                if(isChecked===true){
                    setIsLogin();
                }
                setUserEmail(formValues.email);
                setDisplayName(formValues.email.split('@')[0]);
                history(-1);
            })
            .catch((error) => {
                alert(error.message);
                console.warn(error.message);
            });
    };

    //구글 로그인(팝업)
    const signInGoogle = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                const user = auth.currentUser.displayName;
                const useremail = auth.currentUser.email;
                setUserEmail(useremail);
                setDisplayName(user);
                setIsLoggedIn(true);
                history('/', {replace:true});

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
    };

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
                history('/', {replace:true});

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
    };
    // signInWithRedirect(auth, googleprovider);

    //facebook 로그인
    const signInFaceBook = () => {
        signInWithPopup(auth, facebookprovider)
            .then((result) => {
                // The signed-in user info.
                setIsLoggedIn(true);
                history('/', {replace:true});

                // const user = result.user;
                const user = auth.currentUser;
                const useremail = user.email;
                setUserEmail(useremail);

                const name = user.displayName;
                setDisplayName(name);

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

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
    };

    const loginAccount = (e) => {
        auth
            .login(e.target.txtContent)
            .then(console.log);
    };

    //로그인 유지하기 파트
    const [isChecked, setIsChecked] = useState(false);
    const setIsLogin = (email, password) => {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return signInWithEmailAndPassword(auth, email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    //form, input 데이터
    const initialValues = {email : "", password : ""};
    //사용자가 입력 필드에 입력한 데이터 보유
    const [formValues, setFormValues] = useState(initialValues);
    // 각 입력 필드에 대한 오류 보우
    const [formErrors, setFormErrors] = useState({});
    //양식 제출 중인지 여부 추적(Boolean)
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        if(values.password.length < 6){
            errors.password = "Password must be more than 6 chracters";
        }

        return errors;

    };


    //form 값 0, isSubmitting이 false 일 때 submit시 formerror 마운트
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmitting){
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

                        <LoginSubWrapper>
                            <LoginCheck onClick={()=>{setIsChecked(!isChecked);}} defaultValu={isChecked} type="checkbox"/>
                            <LoginCheckTitle>로그인 유지하기</LoginCheckTitle>
                            <InfoFindLink to="/findaccount">아이디/비밀번호</InfoFindLink>

                        </LoginSubWrapper>
                        <Button type = "submit" onClick={signInEmail} className="login_signInButton">Login</Button>

                        <LoginSocialTitle>SNS로 간편하게 시작하기</LoginSocialTitle>
                        <ImgBtnContainer>
                            <GoogleBtn onClick={ () => signInGoogle()} src={googlebtn} alt={'구글 로그인 버튼'}/>
                            <FaceBookBtn onClick={()=> signInFaceBook()} src={facebookbtn} alt={'페이스북 로그인'}/>

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