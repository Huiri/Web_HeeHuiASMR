import React, {useEffect, useState} from 'react';
import {PromotionChannel, PromotionTitle, PromotionWrapper, VideoThumbnail, VideoWrapper, StyledLink} from "./styled";
import axios from "axios";

const PostVideoCard = (param) => {

    const [videolist, setVideolist] = useState([]);


    useEffect(() => {
        axios
            //AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
            .get(
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=4&type=video&regionCode=KR&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&maxResults=4&type=video&regionCode=KR&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
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
                        <StyledLink to={`/detail/${i.id.videoId}`}  state={{ data: i.snippet }}>
                            <VideoWrapper>
                                <VideoThumbnail className={i} src={i.snippet.thumbnails.medium["url"]} alt=""/>
                                <PromotionTitle>{i.snippet.title}</PromotionTitle>
                                <PromotionChannel>{i.snippet.channelTitle}</PromotionChannel>

                            </VideoWrapper>
                        </StyledLink>
                    </PromotionWrapper>

                )
            })}
        </>
    );
};

export default PostVideoCard;