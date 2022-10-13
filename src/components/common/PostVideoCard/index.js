import React, {useEffect, useState} from 'react';
import {PromotionChannel, PromotionTitle, PromotionWrapper, VideoThumbnail, VideoWrapper, StyledLink} from "./styled";
import axios from "axios";
import Loading from '../../../Utils/Spinner';

const PostVideoCard = ({page, param, order}) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const PAGE_LIMIT = 50;
    const orders = order;

    const [videoList, setVideoList] = useState([]);
    const fetchData = () => {
        setIsLoading(true);

        axios
            //AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
            .get(

                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=4&type=video&regionCode=KR&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=먹방${param}&order=${orders}&maxResults=8&type=video&regionCode=KR&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
            )
            .then((res) => {
                //console.log(res);
                // setVideoList(res.data.items);
                setIsLoading(false);
                setVideoList(items => [...items, ...res.data.items]);
                setHasMore(page !== PAGE_LIMIT);

            })
            .catch(() => {
                console.warn("error");
                setHasMore(false);
            });
    };

    useEffect(() => {
        setVideoList([]);
        fetchData(param);
    },[param, pageNumber]);

    useEffect(() => {
        console.log('pageNUm' + page);
        setPageNumber(page);
    }, [page]);


    return (
        <>
            {isLoading ? <Loading /> : null}
            {videoList &&
            videoList.map((i, idx) => {
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

                );
            })};
        </>
    );
};

export default PostVideoCard;