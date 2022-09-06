import React, {useState, useRef} from 'react';
import {
    VideoTitle,
    VideoCreator,
    TitleWrapper,
    VideoSub,
    VideoWrapper,
    VideoSection,
    CommentContainer,
    CommentWrapper,
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
    CommentText,
    CommentUser,
    CommentIconWrapper,
    CommentItem,
    GarbageBtn
} from './styled';
import CommentList from "../../components/Comment/CommentList";
import CommentInputs from "../../components/Comment/CommentInput";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {commentListState} from "../../recoil/comment";

const Detail = () => {

    const [isLiked, setIsLiked] = useState(false);
    const nextId = useRef(0);
    const [text, setText] = useState("");
    // const commentList = useRecoilValue(filteredCommentListState);
    // const setComments = useSetRecoilState(commentListState);
    // const comments = useRecoilValue(commentListState);

    const [comments, setComments] = useState([]);


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
            // setComments(comments => comments.concat({ id: nextId.current + 1, text, completed: false }));

            setComments(commentValueList => [text, ...commentValueList]);
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
                <HeartBtn onClick={()=>setIsLiked(!isLiked)}/>
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
            <CommentContainer>
                <CommentTitle>의견 나눔장</CommentTitle>
                <CommentInputWrapper>
                    <form onSubmit={addCommentHandler}>
                        <CommentInput type={"text"} value={text} placeholder={"댓글 달기..."} onChange={handleChange}/>
                        <CommentBtn onClick={addCommentHandler}>SEND</CommentBtn>
                    </form>
                </CommentInputWrapper>
                <CommentSection>
                    {comments.map((value, id) => (
                        <CommentItem key={id}>
                            <CommentWrapper>
                                <CommentUser>Chaz</CommentUser>
                                <CommentText>{value}</CommentText>

                            </CommentWrapper>

                            <CommentIconWrapper>
                                <HeartBtn size={"1.4rem"}/>
                                <GarbageBtn/>
                            </CommentIconWrapper>
                        </CommentItem>
                    ))}
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
                <CommentInputs/>
                <CommentList/>

            </CommentContainer>


        </div>
    );
};

export default Detail;