import React, { useEffect, useState } from 'react';
import { PromotionChannel, PromotionTitle, PromotionWrapper, StyledLink, VideoThumbnail, VideoWrapper } from '../PostVideoCard/styled';
import Loading from '../../../Utils/Spinner';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { VideoCountState } from '../../../States/VideoStates';

const ApiVideoCard = ({page, order, param, count, data, color}) => {
    const setVideoCount = useSetRecoilState(VideoCountState);

    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [videoList, setVideoList] = useState([]);
    const PAGE_LIMIT = 50;
    const offset = (page - 1) * count;
    const fetchData = (param, order) => {
        setIsLoading(true);

        if(param === undefined){
            param = '';
        }
        if(order === undefined){
            order = 'viewCount';
        }
        axios
            //  AIzaSyD0DQJxkhFey38GgXaOAw6p8nZk7KIYf4E
            //AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
            //  AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98
            .get(

                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=4&type=video&regionCode=KR&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=8&type=video&regionCode=KR&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=3&type=video&regionCode=KR&key=AIzaSyD0DQJxkhFey38GgXaOAw6p8nZk7KIYf4E`
            )
            .then((res) => {
                //console.log(res);
                // setVideoList(res.data.items);
                setIsLoading(false);
                setShowVideo(items => [...items, ...res.data.items]);
                setHasMore(page !== PAGE_LIMIT);
            })
            .catch(() => {
                console.warn("error");
                setHasMore(false);
            });
    };

    useEffect(()=>{
        fetchData(param);
    },[]);

    const [number, setNumber] = useState(1);
    useEffect(() => {
        setIsLoading(true);
        setNumber(number+1);
    },[page]);

    useEffect(()=>{
        setIsLoading(false);
        setShowVideo(videoList.slice(0, (offset+12)));
    }, [number]);

    const [showVideo, setShowVideo] = useState([]);

    useEffect(() => {
        setShowVideo([]);
        fetchData(param, order);

    }, [param]);

    useEffect(()=>{
        setIsLoading(false);
        setVideoCount(showVideo.length);
    }, [showVideo]);

    return (
        <>
            {isLoading ? <Loading /> : null}
            {showVideo &&
              showVideo.map((i) => {
                  return (
                      <PromotionWrapper key={i.id.videoId}>
                          <StyledLink to={`/detail/${i.id.videoId}`}  state={{ data: i.snippet }}>
                              <VideoWrapper>
                                  <VideoThumbnail className={i} src={i.snippet.thumbnails.medium["url"]} alt=""/>
                                  <PromotionTitle color={color}>{i.snippet.title}</PromotionTitle>
                                  <PromotionChannel>{i.snippet.channelTitle}</PromotionChannel>

                              </VideoWrapper>
                          </StyledLink>
                      </PromotionWrapper>

                  );
              })
            }

        </>
    );
};

export default ApiVideoCard;