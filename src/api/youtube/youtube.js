import {useEffect, useState} from "react";
import axios from "axios";

const [playlist, setPlaylist] = useState([]);

useEffect(() => {
    const youtube_key=  process.env.REACT_APP_YOUTUBE_API_KEY;
    axios
        .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&topicId=ASMR&maxResults=50&key=${youtube_key}`
        )
        .then((res) => {
            console.log(res);
            setPlaylist(res.data.items);
        })
        .catch(() => {});
}, []);
console.log(playlist);