import React from 'react';
import {LayoutContainer} from "../MadeBy/styled";
import { ServiceTitle} from "../Service/styled";
import {ExplainSection,
    StudentExplain,
    StudentTitle,
    Img,
    ExplainWrapper} from "./styled";
import img1 from "../../assets/img/woman.png";
import img2 from "../../assets/img/girl.png";

const StudentPage = () => {
    return (
        <LayoutContainer>
            <ServiceTitle>학생 소개</ServiceTitle>
            <ExplainWrapper>
                <ExplainSection>
                    <Img src={img2} alt={""}/>
                    <StudentTitle>백엔드</StudentTitle>
                    <StudentExplain>컴퓨터공학전공</StudentExplain>
                    <StudentExplain>20191523</StudentExplain>
                    <StudentExplain>전은희</StudentExplain>
                    <StudentTitle>기술 스택</StudentTitle>
                    <StudentExplain>Java, SpringBoot</StudentExplain>
                    <StudentExplain>Mysql</StudentExplain>
                    <StudentExplain>Python</StudentExplain>

                </ExplainSection>

                <ExplainSection>
                    <Img src={img1} alt={""}/>
                    <StudentTitle>프론트엔드</StudentTitle>
                    <StudentExplain>컴퓨터공학전공</StudentExplain>
                    <StudentExplain>20191524</StudentExplain>
                    <StudentExplain>문희리</StudentExplain>
                    <StudentTitle>기술 스택</StudentTitle>
                    <StudentExplain>React</StudentExplain>
                    <StudentExplain>Html, Css, Js</StudentExplain>
                    <StudentExplain>Python</StudentExplain>

                </ExplainSection>

            </ExplainWrapper>
        </LayoutContainer>
    );
};

export default StudentPage;