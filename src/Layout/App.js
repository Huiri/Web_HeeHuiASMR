import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Category from '../pages/Category';
import Login from '../pages/Login';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue
} from 'recoil';

// import {firebase} from '.../firebase';

const App = ({auth}) => {
    return (
        <RecoilRoot>
            <BrowserRouter>
            <Header/>
                <Routes>
                    {/*<Route element={<Layout/>}>*/}
                        <Route path="/" element={<Main/>}></Route>
                        <Route path="/signup" element={<SignUp/>}></Route>
                        <Route path="/category" element={<Category/>}></Route>
                        <Route path="/find" element={<Category/>}></Route>

                        <Route path="/login" element={<Login auth={auth}/>} ></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    {/*</Route>*/}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;