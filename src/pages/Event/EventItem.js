import React from 'react';
import { EventItemWrapper, EventText, EventTitle,EventImg,TitleWrapper } from './styled';
import { eventList } from './eventList';

const EventItem = () => {
  return (
    <>
    {eventList && eventList.map((event)=> {return(
      <EventItemWrapper key={event.id}>
        <EventImg src={event.src} alt={event.alt}/>
        <TitleWrapper>
          <EventTitle>{event.title}</EventTitle>
          <EventText>{event.text}</EventText>

        </TitleWrapper>
      </EventItemWrapper>
    )})}
    </>
);
};

export default EventItem;