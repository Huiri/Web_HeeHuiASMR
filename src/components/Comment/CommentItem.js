import React, {useEffect, useRef, useState} from 'react'
import { commentListState } from '../../recoil/comment';
import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    CommentIconWrapper, CommentItemStyle,
    CommentText,
    CommentUser,
    CommentWrapper, EditBtn,
    GarbageBtn,
    EditInput,
    EditWrapper,
    EditConfirmBtn
} from "./styled";
import {FilledHeartBtn, HeartBtn} from '../../pages/Detail/styled';

const CommentItem = ({ data }) => {
    const setComments = useSetRecoilState(commentListState)
    const comments = useRecoilValue(commentListState);
    const [newText, setNewTest] = useState(data.text);
    const [isEdit, setIsEdit] = useState(false);

    const editInputRef = useRef(null);

    const handleChangeEditInput = e => {
        setNewTest(e.target.value);
    };
    useEffect(()=> {
        //edit 모드일 경우 포커싱
        if(isEdit) {
            editInputRef.current.focus();
        }
    },[isEdit]);

    const onEdit = () => {
        setIsEdit(true);
    };

    const onRemove = () => {
        setComments(comments => comments.filter(comment => comment.id !== data.id))
    };

    const onUpdate = () => {
        if(newText === '') {
            alert('내용을 입력해주세요');
        } else {
            const nextTCommentList = comments.map((comment) => ({
                ...comment,
                text: comment.id === data.id ? newText : comment.text, // 새로운 아이템 내용을 넣어줌
            }));
            setComments(nextTCommentList); // 새로운 리스트를 넣어줌

            setIsEdit(false); // 수정모드를 다시 읽기모드로 변경
        }
    };
    const toggleHeart = () => {
        setComments(comments =>
            comments.map(comment =>
                comment.id === data.id ? { ...data, clicked: !data.clicked } : comment
            )
        )
    };

    return (
        <CommentItemStyle>
            {isEdit ? (
                <EditWrapper>
                    <CommentUser>Chaz</CommentUser>
                        <EditInput
                            type="text"
                            value={newText}
                            ref={editInputRef}
                            onChange={handleChangeEditInput}/>

                </EditWrapper>
            ):(
                <CommentWrapper>
                    <CommentUser>Chaz</CommentUser>
                    <CommentText>{data.text}</CommentText>
                </CommentWrapper>
            )}
            <CommentIconWrapper isEdit={isEdit}>
                {data.clicked ? <FilledHeartBtn onClick={toggleHeart} size={"1.4rem"}/> : <HeartBtn onClick={toggleHeart} size={"1.4rem"}/>}
                {isEdit ? (
                    <EditConfirmBtn onClick={onUpdate}/>
                ):(
                    <EditBtn onClick={onEdit}/>)}
                <GarbageBtn onClick={onRemove}/>
            </CommentIconWrapper>

        </CommentItemStyle>
    )
}

export default CommentItem