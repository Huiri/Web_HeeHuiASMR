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
    FilledHeartBtn, VideoViewer,
    LayoutContainer
} from './styled';
import CommentList from "../../components/Comment/CommentList";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {commentListState} from "../../recoil/comment";
import axios from "axios";
import { useLocation, useParams } from 'react-router-dom';
import { LoginState} from '../../States/LoginStates';
let id = 0;
const getId = () => id++;
const Detail = () => {

    const video_id = useParams().video_id;
    const [isLiked, setIsLiked] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const [text, setText] = useState("");
    const setComments = useSetRecoilState(commentListState);
    const isLoggedIn = useRecoilValue(LoginState);

    const [comment, setComment] = useState([]);
    const getCommentList = () => {

        axios.get("http://localhost:3002/getcomment", {})
            .then((res) => {
                const { data } = res;
                setComments(data);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    const addComment = () => {
        const now_date = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const dataset = {
            text: text,
            video_id : video_id,
            user_idx : 1,
            date :now_date.toString(),
            isdeleted : 0,

        };
        fetch("http://localhost:3002/addcomment", {
            method : "post",
            headers : {
                "content-type": "application/json",
            },
            body : JSON.stringify(dataset),
        })

            .then((res) => {
                console.log(res);
                return window.location.reload();
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(()=>{
        getCommentList();

    }, []);

    const addCommentHandler = e =>{
        e.preventDefault();

        if(text === '') {
            alert('내용을 입력해주세요');
        } else {
            addComment();
            setText('');

        }
    };
    const isLogged = useRecoilValue(LoginState);

    let params = useParams().video_id;


    const location = useLocation().state; // 추가된 부분


    const handleChange = e => {
        setText(e.target.value);
    };

    const [videoURL, setVideoURL] = useState(`https://www.youtube.com/embed/`);

    useEffect(()=>{
        setVideoURL(`https://www.youtube.com/embed/${params}`);
    });
    return (
        <LayoutContainer>
            <TitleWrapper>
                <VideoTitle>{location.data.title}</VideoTitle>
                <VideoCreator>{location.data.channelTitle}</VideoCreator>
            </TitleWrapper>
            {isLoggedIn ? (
                <IconWrapper>
                    {isLiked ? <FilledHeartBtn onClick={()=>setIsLiked(!isLiked)}/> : <HeartBtn onClick={()=>setIsLiked(!isLiked)}/>}
                    {/*<HeartBtn onClick={()=>setIsLiked(!isLiked)}/>*/}
                    {/*<PageBtn isAdded={isAdded} onClick={()=>setIsAdded(!isAdded)}/>*/}
                </IconWrapper>

            ) : null}
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
            {isLogged ? (
                <CommentInputWrapper>
                    <form onSubmit={addCommentHandler}>
                        <CommentInput type={"text"} value={text} placeholder={"댓글 달기..."} onChange={handleChange}/>
                        <CommentBtn onClick={addCommentHandler}>SEND</CommentBtn>
                    </form>
                </CommentInputWrapper>
            ) : null}
            <CommentContainer>
                <CommentTitle>의견 나눔장</CommentTitle>

                <CommentSection>
                    <CommentList video_id = {video_id}/>

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


        </LayoutContainer>
    );
};

export default Detail;