import {useEffect, useState} from 'react';
import axios from "axios";

function useFetch(param){

    const [videolist, setVideolist] = useState([]);

    const fetchData = () => {
        axios
            //AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA
            .get(
                // `https://www.googleapis.com/youtube/v3/search?part=snippet&q=ASMR&maxResults=4&type=video&regionCode=KR&key=AIzaSyCHAdXUjuGX9fznEeA6Fz6EHpABipgxN98`
                `https://www.googleapis.com/youtube/v3/search?part=snippet&q=에셈알${param}&maxResults=10&type=video&regionCode=KR&key=AIzaSyBmNXK-4gvjD7785WFaQVbuGCQwWErPKUA`
            )
            .then((res) => {
                //console.log(res);
                setVideolist(res.data.items);
            })
            .catch(() => {});
    }

    useEffect(() => {
        fetchData();
        return function cleanup(){
        };
    }, []);

    return videolist;
    // []이면 배열 {} 객체
}
export default useFetch;