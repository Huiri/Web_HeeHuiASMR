import React from 'react';
import {LayoutContainer, LayoutTitle} from './styled';
import Accordion from '../../Utils/Accordion';
import { eventList } from './eventList';
const Event = () => {
    return (
        <LayoutContainer>
            <LayoutTitle>진행 중인 이벤트</LayoutTitle>
            {eventList && eventList.map((event)=> {return(
                <Accordion key={event.id} props={event}/>
            );})}
        </LayoutContainer>
    );
};

export default Event;