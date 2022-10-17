import React, {useState, useEffect} from 'react';
import {
    VideoTitle,
    VideoCreator,
    TitleWrapper,
    VideoSub,
    VideoWrapper,
    VideoSection,
    CommentContainer,
    CommentInputWrapper,
    CommentTitle,
    CommentInput,
    CommentBtn,
    SubWrapper,
    VideoSubTitle,
    HeartBtn,
    IconWrapper,
    PageBtn,
    CommentSection,
    FilledHeartBtn, VideoViewer
} from './styled';
import CommentList from "../../components/Comment/CommentList";
import {useSetRecoilState} from "recoil";
import {commentListState} from "../../recoil/comment";
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";
let id = 0;
const getId = () => id++;
const Detail = () => {

    const [isLiked, setIsLiked] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const [text, setText] = useState("");
    const setComments = useSetRecoilState(commentListState);


    const addCommentHandler = e =>{
        e.preventDefault();

        if(text === '') {
            alert('내용을 입력해주세요');
        } else {
            setComments(comments => comments.concat({ id: getId(), text, clicked : false}));

            setText('');

        }
    };

    let params = useParams().video_id;
    console.log(params);


    const location = useLocation().state; // 추가된 부분
    console.log(location.data.title);


    const handleChange = e => {
        setText(e.target.value);
    };


    const [videoURL, setVideoURL] = useState(`https://www.youtube.com/embed/`);

    useEffect(()=>{
        setVideoURL(`https://www.youtube.com/embed/${params}`);
    });
    return (
        <div>
            <TitleWrapper>
                <VideoTitle>{location.data.title}</VideoTitle>
                <VideoCreator>{location.data.channelTitle}</VideoCreator>
            </TitleWrapper>
            <IconWrapper>
                {isLiked ? <FilledHeartBtn onClick={()=>setIsLiked(!isLiked)}/> : <HeartBtn onClick={()=>setIsLiked(!isLiked)}/>}
                {/*<HeartBtn onClick={()=>setIsLiked(!isLiked)}/>*/}
                <PageBtn isAdded={isAdded} onClick={()=>setIsAdded(!isAdded)}/>
            </IconWrapper>
            <VideoWrapper>
                <VideoViewer id="ytplayer" type="text/html" width="85%" height="630"
                    src={videoURL}
                    //https://www.youtube.com/embed/m0x6tUkaI3c
                    frameBorder="0" allowFullScreen/>
                {/*<VideoSection/>*/}
            </VideoWrapper>
            <SubWrapper>
                <VideoSubTitle>영상 부가 설명</VideoSubTitle>
                <VideoSub>{location.data.description}</VideoSub>

            </SubWrapper>
            <hr/>
            <CommentContainer>
                <CommentTitle>의견 나눔장</CommentTitle>
                <CommentInputWrapper>
                    <form onSubmit={addCommentHandler}>
                        <CommentInput type={"text"} value={text} placeholder={"댓글 달기..."} onChange={handleChange}/>
                        <CommentBtn onClick={addCommentHandler}>SEND</CommentBtn>
                    </form>
                </CommentInputWrapper>
                <CommentSection>
                    <CommentList/>

                    {/*{comments.map((comment) => (*/}
                    {/*    <CommentWrapper key={comment.id}>*/}
                    {/*        <CommentCard {...comment} />*/}
                    {/*    </CommentWrapper>*/}
                    {/*))}*/}

                    {/*<CommentListStats />  // 상태값을 보여줄 컴포넌트*/}
                    {/*<CommentListFiters />  // 필터할 컴포넌트*/}
                    {/*<CommentItemCreator />*/}

                    {/*{commentList.map((commentItem) => (*/}
                    {/*    <CommentItem key={commentItem.id} item={commentItem} />*/}
                    {/*))}*/}
                </CommentSection>

            </CommentContainer>


        </div>
    );
};

export default Detail;