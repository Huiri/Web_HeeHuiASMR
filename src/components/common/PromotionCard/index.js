import React from 'react';
import {PromotionImg, PromotionSub, PromotionText, PromotionWrapper} from "./styled";
import useFetch from "../../../hooks/useYoutube";
const PromotionCard = () => {
    const videoList = useFetch([]);
    return (
        <>
            {videoList &&
            videoList.map((i) => {return (

                <PromotionWrapper>
                    <PromotionImg className={i} src={i.snippet.thumbnails.medium["url"]} alt=""/>
                    <PromotionText>{i.snippet.title}</PromotionText>
                    <PromotionSub>{i.snippet.channelTitle}</PromotionSub>
                </PromotionWrapper>
            );})}
        </>
    );
};

export default PromotionCard;