import React, {useState} from 'react';
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
    CommentSection,
    SubWrapper,
    VideoSubTitle,
    HeartBtn,
    IconWrapper, PageBtn
} from './styled';
const Detail = () => {
    const [isLike, setIsLike] = useState(false);
    return (
        <div>
            <TitleWrapper>
                <VideoTitle>영상 제목</VideoTitle>
                <VideoCreator>영상 창작자</VideoCreator>
            </TitleWrapper>
            <IconWrapper>
                <HeartBtn onClick={()=>setIsLike(!isLike)}/>
                <PageBtn/>
            </IconWrapper>
            <VideoWrapper>
                <VideoSection/>
            </VideoWrapper>
            <SubWrapper>
                <VideoSubTitle>영상 부가 설명</VideoSubTitle>
                <VideoSub>영상 부가 설명 들어갈 자리입니다.</VideoSub>

            </SubWrapper>
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