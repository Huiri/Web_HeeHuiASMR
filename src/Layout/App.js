import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Category from '../pages/Category';
import Login from '../pages/Login';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import MyPage from '../pages/MyPage';
import Favorite from '../pages/Favorite';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue
} from 'recoil';
import SearchResult from "../pages/SearchResult";
import Detail from "../pages/Detail";
import { QueryClient, QueryClientProvider } from 'react-query';

// import {firebase} from '.../firebase';

const App = ({auth}) => {
    return (
        <RecoilRoot>
            <BrowserRouter>
            <Header/>
                <Routes>
                    {/*<Route element={<Layout/>}>*/}
                        <Route path="/" element={<Main/>}/>
                        <Route path=" /signup" element={<SignUp/>}/>
                        <Route path="/category/:word" element={<Category/>}/>
                        <Route path="/find" element={<Category/>}/>
                        <Route path="/search/:word" element={<SearchResult/>}/>
                        <Route path="/detail/:video_id" element={<Detail/>}/>
                        <Route path="/mypage" element={<MyPage auth={auth}/>} />
                        <Route path="/favorite" element={<Favorite/>} />

                    <Route path="/login" element={<Login auth={auth}/>} />
                        <Route path="*" element={<NotFound/>}/>
                {/*    <Route path='/privacy-policy' component={() => {*/}
                {/*    window.location.href = 'http://it.daejin.ac.kr/49.html';*/}
                {/*    return null;*/}
                {/*}}/>*/}
                    <Route
                        path="/graduate"
                        component={() => {
                            global.window && (global.window.location.href = 'http://it.daejin.ac.kr/49.html');
                            return null;
                        }}
                    />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;