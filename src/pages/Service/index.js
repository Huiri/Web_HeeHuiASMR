import React from 'react';
import {
    LayoutContainer,
    ServiceSubTitle,
    ServiceTitle,
    TextContainer, ServiceExplain,
    Section

} from "./styled";

const Service = () => {
    return (
        <LayoutContainer>
            <ServiceTitle>서비스 소개</ServiceTitle>
                <ServiceSubTitle>HEEHUI_ASMR은?</ServiceSubTitle>
                <Section>
                    <TextContainer>
                        <ServiceExplain>여러 영상을 보느라 알고리즘이 깨진 당신을 위한 서비스</ServiceExplain>
                        <ServiceExplain>오직 ASMR만을 찾아 볼 수 있는 서비스</ServiceExplain>
                        <ServiceExplain>카테고리별로 인기순으로 최신순으로 찾아볼 수 있는 서비스</ServiceExplain>
                    </TextContainer>
                </Section>

                <ServiceSubTitle>ASMR이란?</ServiceSubTitle>
                <Section>
                    {/*<IconContainer>
                        <IconWrapper>
                            <Note1/><Note2/>
                        </IconWrapper>
                        <IconWrapper>
                            <SoundGraph/><SoundGraph/><SoundGraph/>
                        </IconWrapper>
                        <IconWrapper>
                            <Note3/>
                        </IconWrapper>

                    </IconContainer>*/}
                    <TextContainer>
                        <ServiceExplain>Autonomous Sensory</ServiceExplain>
                        <ServiceExplain>Meridian Response의 약자로</ServiceExplain>
                        <ServiceExplain>정신적인 안정감을 가져다주는 소리</ServiceExplain>
                    </TextContainer>
                </Section>


                <ServiceSubTitle>Youtube API는?</ServiceSubTitle>
                <Section>
                    <TextContainer>
                        <ServiceExplain>Google Cloud Flatform에서 제공하는 API로</ServiceExplain>
                        <ServiceExplain>동영상 정보 및 댓글 가져오기, 업로드 등등</ServiceExplain>
                        <ServiceExplain>여러 유튜브 서비스를 간편하게 이용할 수 있는 API</ServiceExplain>
                    </TextContainer>
                </Section>

                <ServiceSubTitle>Firebase?</ServiceSubTitle>
                <Section>
                    <TextContainer>
                        <ServiceExplain>Firebase사에서 개발하고 구글이 인수한 플랫폼으로</ServiceExplain>
                        <ServiceExplain>모바일 및 웹 어플리케이션 개발 플랫폼으로</ServiceExplain>
                        <ServiceExplain>현 서비스에서는 Authentication을 활용함</ServiceExplain>
                    </TextContainer>
                </Section>


        </LayoutContainer>
    );
};

export default Service;