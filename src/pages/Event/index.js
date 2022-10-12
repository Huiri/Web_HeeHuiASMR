import React from 'react';
import {LayoutContainer, LayoutTitle} from './styled';
import EventItem from './EventItem';
const Event = () => {
    return (
        <LayoutContainer>
          <LayoutTitle>진행 중인 이벤트</LayoutTitle>
            <EventItem/>
        </LayoutContainer>
    );
};

export default Event;