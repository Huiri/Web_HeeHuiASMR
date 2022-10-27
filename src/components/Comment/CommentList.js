import React from 'react';
import CommentItem from './CommentItem';
import { commentListState } from '../../recoil/comment';
import {useRecoilValue} from "recoil";

const CommentList = () => {
    const comments = useRecoilValue(commentListState);

    return (
        <div>
            <div>
                {comments.map(comment => (
                    <CommentItem key={comment.id} data={comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentList;