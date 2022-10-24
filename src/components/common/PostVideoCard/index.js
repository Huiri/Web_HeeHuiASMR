import React, { useEffect, useState } from 'react';
import { PromotionChannel, PromotionTitle, PromotionWrapper, StyledLink, VideoThumbnail, VideoWrapper } from './styled';
import Loading from '../../../Utils/Spinner';
import { useRecoilValue } from 'recoil';
import { VideoState } from '../../../States/VideoStates';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostVideoCard = ({page, order, param, count, data}) => {
    // const video = useRecoilValue(VideoState);

    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [videoList, setVideoList] = useState([]);
    const PAGE_LIMIT = 50;
    const offset = (page - 1) * count;

    // const fetchData = (param, order) => {
    //     setIsLoading(true);
    //
    //     if(param === undefined){
    //         param = '';
    //     }
    //     if(order === undefined){
    //         order = 'viewCount';
    //     }
    //     axios
    //     //  Google_API_KEY
    //     //Google_API_KEY
    //         .get(
    //
    //             // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=4&type=video&regionCode=KR&key=Google_API_KEY`
    //             // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=8&type=video&regionCode=KR&key=AIzaSyBmNXK-Google_API_KEY`
    //             `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&order=${order}&maxResults=8&type=video&regionCode=KR&key=Google_API_KEY`
    //         )
    //         .then((res) => {
    //             //console.log(res);
    //             // setVideoList(res.data.items);
    //             setIsLoading(false);
    //             setVideoList(items => [...items, ...res.data.items]);
    //             setHasMore(page !== PAGE_LIMIT);
    //         })
    //         .catch(() => {
    //             console.warn("error");
    //             setHasMore(false);
    //         });
    // };

    useEffect(()=>{
        setVideoList(data);
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
        if(param === '전체'){
            return real;
        } else {
            return real.filter(e => e.category === param);
        }

    };
    useEffect(() => {
        setShowVideo([]);
        setShowVideo(findCategory(videoList));


    }, [param]);

    useEffect(()=>{
        setIsLoading(false);
    }, [showVideo]);

    return (
        <>
            {isLoading ? <Loading /> : null}
            {showVideo &&
                showVideo.slice(0, offset+count).map((show) => {
                    return (
                        <PromotionWrapper key={show.video_idx}>
                            <StyledLink to={`/detail/${show.videoId}`}  state={{ data: show }}>
                                <VideoWrapper>
                                    <VideoThumbnail src={show.thumbnail} alt=""/>
                                    <PromotionTitle>{show.title}</PromotionTitle>
                                    <PromotionChannel>{show.creator}</PromotionChannel>

                                </VideoWrapper>
                            </StyledLink>
                        </PromotionWrapper>

                    );
                })}


        </>
    );
};

export default PostVideoCard;
