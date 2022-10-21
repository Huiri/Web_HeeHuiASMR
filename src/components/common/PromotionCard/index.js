import React, { useEffect, useState } from 'react';
import {PromotionImg, PromotionSub, PromotionText, PromotionWrapper} from "./styled";
import useFetch from "../../../hooks/useYoutube";
import axios from 'axios';
import {useParams} from "react-router-dom";
import Loading from '../../../Utils/Spinner';
import { useRecoilValue } from 'recoil';
import { VideoState } from '../../../States/VideoStates';

const PromotionCard = ({page, order, param, count, data}) => {

    data = null;
    const video = useRecoilValue(VideoState);

    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [videoList, setVideoList] = useState([]);
    const PAGE_LIMIT = 50;
    const offset = (page - 1) * count;
    const [word, setWord] = useState(param);

    const fetchData = (word) => {
        setIsLoading(true);

        axios
            //Google_API_KEY
            .get(

                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${word}&maxResults=4&type=video&regionCode=KR&key=Google_API_KEY`
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=먹방${param}&order=${orders}&maxResults=8&type=video&regionCode=KR&key=Google_API_KEY`
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
        if(data !== null){
            setVideoList(video);
        } else {
            fetchData(word);
        }

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
        // fetchData(param);

    }, [param]);

    useEffect(()=>{
        setWord(param);
    },[param]);

    useEffect(()=>{
        setIsLoading(false);
    }, [showVideo]);
    // let params = useParams();
    // const [pageNumber, setPageNumber] = useState(1);
    // const [isLoading, setIsLoading] = useState(true);
    // const [hasMore, setHasMore] = useState(true);
    // const PAGE_LIMIT = 50;
    // const [word, setWord] = useState(params);
    // const [videoList, setVideoList] = useState([]);
    // const fetchData = (word) => {
    //     setIsLoading(true);
    //
    //     axios
    //         //AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
    //         .get(
    //
    //             `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${word}&order=viewCount&maxResults=1&type=video&regionCode=KR&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
    //             // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${word}&order=viewCount&maxResults=2&type=video&regionCode=KR&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
    //         )
    //         .then((res) => {
    //             //console.log(res);
    //             // setVideoList(res.data.items);
    //             setIsLoading(false);
    //             setVideoList(items => [...items, ...res.data.items]);
    //             setHasMore(page !== PAGE_LIMIT);
    //
    //         })
    //         .catch(() => {
    //             console.warn("error");
    //             setHasMore(false);
    //         });
    // };
    // // let videoList = useFetch(param);
    //
    // useEffect(() => {
    //     setVideoList([]);
    //     fetchData(word);
    //
    // },[word]);
    //
    // useEffect(()=>{
    //     setWord(params);
    // },[params]);
    //
    // useEffect(() => {
    //     setPageNumber(page);
    // }, [page]);
    return (
        <>
            {isLoading ? <Loading /> : null}
            {showVideo &&
              showVideo.map((i) => {return (

                  <PromotionWrapper key={i.etag}>
                      <PromotionImg className={i} src={i.snippet.thumbnails.medium["url"]} alt=""/>
                      <PromotionText>{i.snippet.title}</PromotionText>
                      <PromotionSub>{i.snippet.channelTitle}</PromotionSub>
                  </PromotionWrapper>
              );})}
        </>
    );
};

export default PromotionCard;
