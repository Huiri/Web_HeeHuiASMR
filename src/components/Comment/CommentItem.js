import React from 'react'
import { commentListState } from '../../recoil/comment';
import {useSetRecoilState} from "recoil";
import {
    CommentIconWrapper, CommentItemStyle,
    CommentText,
    CommentUser,
    CommentWrapper, EditBtn,
    GarbageBtn,
} from "./styled";
import {FilledHeartBtn, HeartBtn} from '../../pages/Detail/styled';

const CommentItem = ({ data }) => {
    const setComments = useSetRecoilState(commentListState)

    const onRemove = () => {
        setComments(comments => comments.filter(comment => comment.id !== data.id))
    };
    const toggleHeart = () => {
        setComments(comments =>
            comments.map(comment =>
                comment.id === data.id ? { ...data, clicked: !data.clicked } : comment
            )
        )
    };


    const onUpdate = () => {
        setComments(comments =>
            comments.map(comment =>
                comment.id === data.id ? { ...data, text: data.text } : comment
            )
        )
    };
    return (
        <CommentItemStyle>
            <CommentWrapper>
                <CommentUser>Chaz</CommentUser>
                <CommentText>{data.text}</CommentText>
            </CommentWrapper>

            <CommentIconWrapper>
                {data.clicked ? <HeartBtn onClick={toggleHeart} size={"1.4rem"}/> : <FilledHeartBtn onClick={toggleHeart} size={"1.4rem"}/> }
                <EditBtn onClick={onUpdate}/>
                <GarbageBtn onClick={onRemove}/>
            </CommentIconWrapper>
        </CommentItemStyle>
    )
}

export default CommentItem