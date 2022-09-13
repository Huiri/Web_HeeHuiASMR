import React, {useEffect, useState} from 'react';
import {PromotionChannel, PromotionTitle, PromotionWrapper, VideoThumbnail} from "./styled";
import axios from "axios";

const PostVideoCard = () => {

    const [videolist, setVideolist] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=4&type=video&regionCode=KR&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&topicId=ASMR&maxResults=10&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
            )
            .then((res) => {
                console.log(res);
                setVideolist(res.data.items);
            })
            .catch(() => {});
        return function cleanup(){

        };
    }, []);
    console.log(videolist);


    return (
        <>
            {videolist &&
            videolist.map((i, idx) => {
                return (
                    <PromotionWrapper key={idx}>
                        {/*<Link to={`/detail/${i.id}`}>*/}
                            <VideoThumbnail className={i} src={i.snippet.thumbnails.medium["url"]} alt=""/>
                            <PromotionTitle>{i.snippet.title}</PromotionTitle>
                        <PromotionChannel>{i.snippet.channelTitle}</PromotionChannel>
                        {/*</Link>*/}
                    </PromotionWrapper>

                )
            })}
        </>
    );
};

export default PostVideoCard;