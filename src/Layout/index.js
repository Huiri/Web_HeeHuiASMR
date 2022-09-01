import React from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeaderStyle = styled.div`
background : lightblue;
color : white;
font-size : 2rem;
margin: 0 auto;
padding : 1rem;
display: flex;


p {
    font-size: 1.2rem;
    margin : auto 0 0 auto;
    padding : 1rem;
    
    &:hover {
        color : black;
    }
}
`
const Layout = (props) => {
    return (
        <div>
            {/*
            <HeaderStyle >
                Header
                <p>Login</p>
            </HeaderStyle>
            <main>
                <Outlet/>
            </main>
    */}
    <Header/>
    <main>
        {props.childen}
    </main>
        </div>
    );
};

export default Layout;