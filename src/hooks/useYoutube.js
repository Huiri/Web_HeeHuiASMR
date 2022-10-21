import {useEffect, useState} from 'react';
import axios from "axios";

function useFetch(param){

    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const PAGE_LIMIT = 50;
    const fetchData = () => {
        axios
            //Google_API_KEY
            //Google_API_KEY
            .get(
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR${param}&maxResults=4&type=video&regionCode=KR&key=Google_API_KEY`
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=먹방${param}&maxResults=9&type=video&regionCode=KR&key=Google_API_KEY`
            )
            .then((res) => {
                //console.log(res);
                // setVideoList(res.data.items);
                setIsLoading(false);
                setVideoList(items => [...items, ...res.data.items]);
                setHasMore(page !== PAGE_LIMIT);

            })
            .catch(() => {});
    };

    useEffect(() => {
        fetchData();
        return function cleanup(){
        };
    }, []);

    return videoList;
    // []이면 배열 {} 객체
}
export default useFetch;
