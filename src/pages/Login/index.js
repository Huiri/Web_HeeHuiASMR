import {React, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import { signIn } from '../auth';
import {getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import {ReactComponent as GoogleIcon} from '../../assets/icons/GoogleIcon.svg';
import {ReactComponent as NaverIcon} from '../../assets/icons/NaverIcon.svg';
import {ReactComponent as KakaoIcon} from '../../assets/icons/KakaoIcon.svg';


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
    LoginState,
    LoginStateCheck,
    LoginSocial,
    InfoFindLink,
    LoginWarnSpan
} from './styled';

const Login = ({auth}) => {
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const history = useNavigate();



    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(getAuth(), formValues.email, formValues.password)
        .then((userCredential) => {
            history('/', {replace:true})
    })
        .catch((error) => {
            alert(error.message);
            console.warn(error.message);
    });
    }

    const loginAccount = (e) => {
        auth
            .login(e.target.txtContent)
            .then(console.log);
    }
    
    const signOut = e => {
        signInWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
            history('/', {replace:true})
        })
        .catch((error) => {
            alert(error.message);
            console.warn(error.message);
        });
    }

    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = ({target}) =>{
        setIsChecked(!isChecked);
    }

    //form, input 데이터
    const initialValues = {email : "", password : ""};
    //사용자가 입력 필드에 입력한 데이터 보유
    const [formValues, setFormValues] = useState(initialValues);
    // 각 입력 필드에 대한 오류 보우
    const [formErrors, setFormErrors] = useState({});
    //양식 제출 중인지 여부 추적(Boolean)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        console.log(formValues);
    } ;
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };
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

    }


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
                        onChange={()=>handleChange} 
                        type = "email" name="email" id="email"/>
                    {formErrors.email && (
                        <LoginWarnSpan className='error'>{formErrors.email}</LoginWarnSpan>)}
                    
                    <LoginInput 
                        placeholder="비밀번호를 입력하세요."
                        value={formValues.password} 
                        onChange={()=>handleChange} 
                        type ="password" name="password" id="password"/>
                    {formErrors.password && (
                    <LoginWarnSpan className='error'>{formErrors.password}</LoginWarnSpan>)}

                    <LoginStateCheck onClick={()=>setIsChecked(!isChecked)} type="checkbox"/>
                    <LoginState>로그인 상태 유지</LoginState>
                    <InfoFindLink to="/find">아이디/비밀번호</InfoFindLink>
                    <Button type = "submit" onClick={signIn} className="login_signInButton">Login</Button>

                    <LoginSocial>SNS로 간편하게 시작하기</LoginSocial>
                    <ImgBtnContainer>
                        <ImgBtn> <GoogleIcon/> </ImgBtn>
                        <ImgBtn> <NaverIcon/> </ImgBtn>
                        <ImgBtn> <KakaoIcon/> </ImgBtn>

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