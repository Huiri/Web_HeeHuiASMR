import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword  } from "firebase/auth";
import {auth} from 'C:/Users/gmlfl/JavaScript/graduate-project/src/firebase'
import {Button, 
    RegisterForm, 
    RegisterInput, 
    RegisterDiv, 
    RegisterTitle, 
    RegisterContainer,
    RegisterWrapper
} from './styled';

const SignUp = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(userCredential){
                history('/login', {replace: true});
            }
        })
        .catch((error) => {
            alert(error.message);
            console.warn(error.message);
        });
    }
    return (
        <RegisterDiv className="signUp">
            <RegisterWrapper>
            <RegisterTitle>WELCOME</RegisterTitle>

            <RegisterContainer className='login_container'>
                <RegisterForm>
                    <RegisterInput placeholder="이메일" value={email} onChange={e=>setEmail(e.target.value)} type = "email" />
                    <RegisterInput placeholder="비밀번호" value={password} onChange={e=>setPassword(e.target.value)} type ="password"/>
                    <Button onClick={register} className="login_registerButton">Register</Button>

                    {/* <Button onClick={loginAccount}>Google</Button  > */}
                </RegisterForm>
            </RegisterContainer>

            </RegisterWrapper>

        </RegisterDiv>
    );
};

export default SignUp;