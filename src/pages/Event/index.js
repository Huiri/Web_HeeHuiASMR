import React, {useState} from 'react';
import {LayoutContainer, LayoutTitle} from './styled';
import Accordion from '../../Utils/Accordion';
import { eventList } from './eventList';
const Event = () => {

    const [data, setData] = useState([]);
    const onCall =()=>{
        fetch("http://localhost:3001/callbody",{
            method:"post",
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(),
        })
            .then((res)=>res.json())
            .then((json)=>{
                setData({
                    data : json.test_body,
                });
                console.log(data);
            });
    };
    return (
        <LayoutContainer>
            <LayoutTitle>진행 중인 이벤트</LayoutTitle>
            {eventList && eventList.map((event)=> {return(
                <Accordion key={event.id} props={event}/>
            );})}
            {/*
            {data && data.map((idx) => {return(
                <h3>{idx}</h3>

            );})}
            */}
            <button onClick={onCall}>불러오기</button>

        </LayoutContainer>
    );
};

export default Event;