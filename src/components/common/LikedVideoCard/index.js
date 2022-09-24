import React from 'react';
import {
    LikedVideoCardContainer,
    LikedVideoImg,
    LikedVideoTitle,
    LikedVideoChannel,
    LikedVideoDescription
} from "./styled";

const LikedVideoCard = () => {
    return (
        <LikedVideoCardContainer>
            <LikedVideoImg alt={""} src={""}/>
            <LikedVideoTitle>title</LikedVideoTitle>
            <LikedVideoChannel>channel id</LikedVideoChannel>
            <LikedVideoDescription>description</LikedVideoDescription>

        </LikedVideoCardContainer>
    );
};

export default LikedVideoCard;