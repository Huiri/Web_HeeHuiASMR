import React from 'react';
import CommentItem from './CommentItem';
import { commentListState } from '../../recoil/comment';
import {useRecoilValue} from "recoil";

const CommentList = (video_id) => {

    const comments = useRecoilValue(commentListState);
    const trueComment = comments.filter(com=> com.video_id === video_id.video_id);
    return (
        <div>
            {/*<div>*/}
            {/*    {comments.map(comment => (*/}
            {/*        <CommentItem key={comment.id} data={comment} />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div>
                {trueComment.map(comment => (
                    <CommentItem key={comment.comment_idx} data={comment} video_id={video_id.video_id} />
                ))}
            </div>
        </div>
    );
};

export default CommentList;