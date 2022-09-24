import React from 'react';
import {LayoutContainer} from "../MyPage/styled"

import {Main,
    SideBar} from "../SearchResult/styled";
import LikedVideoCard from "../../components/common/LikedVideoCard";

const Favorite = () => {
    return (
        <LayoutContainer>
            <Main>

                <LikedVideoCard/>
                <LikedVideoCard/>
                <LikedVideoCard/>
                <LikedVideoCard/>
                <LikedVideoCard/>
            </Main>
            <SideBar>

            </SideBar>

        </LayoutContainer>
    );
};

export default Favorite;