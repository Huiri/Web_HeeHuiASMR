import React, { useState } from 'react';
import {Container, ContentText, Header, Button, ContentsWrapper, Contents, EventTitle} from './styled';

const Accordion = ({props}) => {

    const [showInfo, setShowInfo] = useState(false);
    return (
        <Container>
            <Header>
                <EventTitle>{props.title}</EventTitle>
                {/* 버튼 클릭시 setShowInfo보이기 : useState(false) + (!showInfo) = true */}
                <Button className="btn" onClick={() => setShowInfo
                (!showInfo)}>
                    {/* showInfo가 true라면 -표시 , false라면 +표시 */}
                    {showInfo ? '닫기' : '열기'}
                </Button>
            </Header>
            <ContentsWrapper>
                {showInfo &&
                  <>
                      <Contents>
                          <ContentText>{props.text1}</ContentText>
                          <ContentText>{props.text2}</ContentText>
                          <ContentText>{props.text3}</ContentText>
                      </Contents>
                  </>
                }

            </ContentsWrapper>
        </Container>
    );
};

export default Accordion;