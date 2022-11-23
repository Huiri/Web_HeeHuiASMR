import React, { useEffect, useState } from 'react';
import {PromotionImg, PromotionSub, PromotionText, PromotionWrapper} from "./styled";
// import useFetch from "../../../hooks/useYoutube";
import axios from 'axios';
import {StyledLink} from '../PostVideoCard/styled';
// import {useParams} from "react-router-dom";
import Loading from '../../../Utils/Spinner';
import { useRecoilValue } from 'recoil';
import { VideoState } from '../../../States/VideoStates';

const PromotionCard = ({page, order, param, count, data}) => {

    // const video = useRecoilValue(VideoState);

    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [videoList, setVideoList] = useState([]);
    const PAGE_LIMIT = 50;
    const offset = (page - 1) * count;

    const fetchData = (param) => {
        setIsLoading(true);

        if(param === undefined) {
            param = '';
        }
        axios
            //AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
            .get(

                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&maxResults=4&type=video&regionCode=KR&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=먹방${param}&order=${orders}&maxResults=8&type=video&regionCode=KR&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
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

    useEffect(()=>{

        // setVideoList(data);
        fetchData(param);

    },[]);

    const [number, setNumber] = useState(1);
    useEffect(() => {
        setIsLoading(true);
        setNumber(number+1);
    },[page]);

    useEffect(()=>{
        setIsLoading(false);
        setShowVideo(videoList.slice(offset, ( offset+12)));
    }, [number]);

    const [showVideo, setShowVideo] = useState([]);

    const findCategory = (array) => {
        const real = [...array];
        if(param === '전체'){
            return real;
        } else {
            return real.filter(e => e.category === param);
        }

    };
    useEffect(() => {
        setShowVideo([]);
        setShowVideo(findCategory(videoList));
        fetchData(param);

    }, [param]);

    useEffect(()=>{
        setIsLoading(false);
    }, [showVideo]);

    return (
        <>
            {isLoading ? <Loading /> : null}
            {videoList &&
              videoList.slice(0,3).map((i) => {return (
                  <StyledLink to={`/detail/${i.id.videoId}`}  state={{ data: i }}>

                      <PromotionWrapper key={i.etag}>
                          <PromotionImg className={i} src={i.snippet.thumbnails.medium["url"]} alt=""/>
                          <PromotionText>{i.snippet.title}</PromotionText>
                          <PromotionSub>{i.snippet.channelTitle}</PromotionSub>
                      </PromotionWrapper>
                  </StyledLink>
              );})}
        </>
    );
};

export default PromotionCard;