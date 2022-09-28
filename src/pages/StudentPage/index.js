import React from 'react';
import {LayoutContainer} from "../MadeBy/styled";
import {ServiceSubTitle, ServiceTitle, ServiceExplain} from "../Service/styled";

const StudentPage = () => {
    return (
        <LayoutContainer>
            <ServiceTitle>학생 소개</ServiceTitle>
            <ServiceSubTitle>백엔드</ServiceSubTitle>
            <ServiceExplain>컴퓨터공학전공 19학번 전은희</ServiceExplain>
            <ServiceSubTitle>프론트엔드</ServiceSubTitle>
            <ServiceExplain>컴퓨터공학전공 19학번 문희리</ServiceExplain>

        </LayoutContainer>
    );
};

export default StudentPage;