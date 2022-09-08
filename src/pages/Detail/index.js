import React, {useState} from 'react';
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
    FilledHeartBtn
} from './styled';
import CommentList from "../../components/Comment/CommentList";
import {useSetRecoilState} from "recoil";
import {commentListState} from "../../recoil/comment";
let id = 0
const getId = () => id++
const Detail = () => {

    const [isLiked, setIsLiked] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    // const [nextId, setNextId] = useState(0);
    const [text, setText] = useState("");
    // const commentList = useRecoilValue(filteredCommentListState);
    const setComments = useSetRecoilState(commentListState);
    // const comments = useRecoilValue(commentListState);

    // const [comments, setComments] = useState([]);


    // const addComment = () => {
    //
    //     setComments((oldComments) => {
    //         const id = oldComments.length
    //             ? oldComments[oldComments.length -1].id+1
    //             :0;
    //
    //         //기존 oldComments에 원소가 있으면 id + 1 없으면 id = 0
    //         return [
    //             ...oldComments,
    //             {
    //                 content: content,
    //                 id : Math.random() * 100,
    //                 isCompleted : fa
    //                 // date : date.getUTCDate()
    //             },
    //         ];
    //     });
    //     setContent('');
    //
    // };
    const addCommentHandler = e =>{
        e.preventDefault();

        if(text === '') {
            alert('내용을 입력해주세요');
        } else {
            setComments(comments => comments.concat({ id: getId(), text, clicked : false}));

            // setComments(commentValueList => [text, ...commentValueList]);
            setText('');
            // addComment(content);

        }
    };

    const handleChange = e => {
        setText(e.target.value);
    };
    return (
        <div>
            <TitleWrapper>
                <VideoTitle>영상 제목</VideoTitle>
                <VideoCreator>영상 창작자</VideoCreator>
            </TitleWrapper>
            <IconWrapper>
                {isLiked ? <FilledHeartBtn onClick={()=>setIsLiked(!isLiked)}/> : <HeartBtn onClick={()=>setIsLiked(!isLiked)}/>}
                {/*<HeartBtn onClick={()=>setIsLiked(!isLiked)}/>*/}
                <PageBtn isAdded={isAdded} onClick={()=>setIsAdded(!isAdded)}/>
            </IconWrapper>
            <VideoWrapper>
                <VideoSection/>
            </VideoWrapper>
            <SubWrapper>
                <VideoSubTitle>영상 부가 설명</VideoSubTitle>
                <VideoSub>영상 부가 설명 들어갈 자리입니다.</VideoSub>

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