import React, { useEffect, useState } from 'react';
import { PromotionChannel, PromotionTitle, PromotionWrapper, StyledLink, VideoThumbnail, VideoWrapper } from '../PostVideoCard/styled';
import Loading from '../../../Utils/Spinner';
import axios from 'axios';

const ApiVideoCard = ({page, order, param, count, data}) => {

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
        // Google API KEY
        //Google API KEY
            .get(

                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=4&type=video&regionCode=KR&key=Google_API_KEY`
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=8&type=video&regionCode=KR&key=Google_API_KEY`
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=8&type=video&regionCode=KR&key=Google_API_ KEY`
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

    const findCategory = (array) => {
        const real = [...array];
        if(param === '전체') {
            return real;
        } else {
            return real.filter(e => e.category === param);
        }

    };
    useEffect(() => {
        setShowVideo([]);
        fetchData(param, order);

    }, [param]);
    console.log(videoList);

    useEffect(()=>{
        setIsLoading(false);
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
                                  <PromotionTitle>{i.snippet.title}</PromotionTitle>
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
