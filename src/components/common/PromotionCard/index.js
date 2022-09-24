import React from 'react';
import {PromotionImg, PromotionSub, PromotionText, PromotionWrapper} from "./styled";

const PromotionCard = () => {
    return (
        <>
            <PromotionWrapper>
                <PromotionImg className='2'/>
                <PromotionText>22 F/W Essential</PromotionText>
                <PromotionSub>추운 날씨의 군고구마</PromotionSub>
            </PromotionWrapper>

        </>
    );
};

export default PromotionCard;