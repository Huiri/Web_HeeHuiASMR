import React from 'react';
import {
    VideoTitle,
    VideoCreator,
    TitleWrapper,
    VideoSub,
    VideoWrapper,
    VideoSection,
    CommentWrapper,
    CommentInputSection,
    CommentTitle,
    CommentInput,
    CommentBtn,
    CommentSection
} from './styled';
const Detail = () => {
    return (
        <div>
            <TitleWrapper>
                <VideoTitle>영상 제목</VideoTitle>
                <VideoCreator>영상 창작자</VideoCreator>
                <VideoSub>영상 부가 설명 들어갈 자리입니다.</VideoSub>
            </TitleWrapper>
            <VideoWrapper>
                <VideoSection/>
            </VideoWrapper>
            <hr/>
            <CommentWrapper>
                <CommentTitle>의견 나눔장</CommentTitle>
                <CommentInputSection>
                    <CommentInput/>
                    <CommentBtn>SEND</CommentBtn>
                </CommentInputSection>
                <CommentSection>

                </CommentSection>
            </CommentWrapper>


        </div>
    );
};

export default Detail;