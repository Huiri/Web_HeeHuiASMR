import React, {useEffect, useState} from 'react';
import {PromotionSub, PromotionText, PromotionWrapper, VideoThumbnail} from "./styled";
import axios from "axios";
import {Link} from "react-router-dom";

const PostVideoCard = () => {

    const [videolist, setVideolist] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=5&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&topicId=ASMR&maxResults=10&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
            )
            .then((res) => {
                console.log(res);
                setVideolist(res.data.items);
            })
            .catch(() => {});

    }, []);
    console.log(videolist);


    return (
        <>
            {videolist &&
            videolist.map((i, idx) => {
                return (
                    <PromotionWrapper key={idx}>
                        {/*<Link to={`/detail/${i.id}`}>*/}
                            <VideoThumbnail className='1' src={i.snippet.thumbnails.medium["url"]} alt=""/>
                            <PromotionText>{i.snippet.title}</PromotionText>
                            <PromotionSub>{i.snippet.description}</PromotionSub>
                        {/*</Link>*/}
                    </PromotionWrapper>

                )
            })}
        </>
    );
};

export default PostVideoCard;