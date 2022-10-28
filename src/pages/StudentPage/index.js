import React from 'react';
import {ExplainSection,
    StudentExplain,
    StudentTitle,
    Img,
    ExplainWrapper,
    PageTitle,
    ImgWrapper,
    TextWrapper,LayoutContainer,
    TextWrapper2,
    ExplainSection2
} from "./styled";
import img1 from "../../assets/img/woman.png";
import img2 from "../../assets/img/girl.png";

const StudentPage = () => {
    return (
        <LayoutContainer>
            <PageTitle>학생 소개</PageTitle>
            <ExplainWrapper>
                <ExplainSection>
                    <ImgWrapper>
                        <Img src={img1} alt={""}/>
                    </ImgWrapper>
                    <TextWrapper>
                        <StudentTitle>프론트엔드 - 문희리</StudentTitle>
                        <StudentExplain>컴퓨터공학전공 20191524</StudentExplain>

                        <StudentTitle>기술 스택</StudentTitle>
                        <StudentExplain>React, Python, Node.js</StudentExplain>
                        <StudentExplain>Html, Css, Js</StudentExplain>

                        <StudentTitle>ABOUT ME</StudentTitle>
                        {/*<StudentExplain>커피 : 차를 선호</StudentExplain>*/}
                        {/*<StudentExplain>운동 : 월수금 아침 9시마다 런데이 중</StudentExplain>*/}
                        <StudentExplain>블로그 : https://blog.naver.com/gmlfltj</StudentExplain>
                        <StudentExplain>Github : https://github.com/Huiri</StudentExplain>

                    </TextWrapper>

                </ExplainSection>

                <ExplainSection2>
                    <TextWrapper2>
                        <StudentTitle>백엔드 - 전은희</StudentTitle>
                        <StudentExplain>컴퓨터공학전공 20191523</StudentExplain>

                        <StudentTitle>기술 스택</StudentTitle>
                        <StudentExplain>Java, SpringBoot, Python</StudentExplain>
                        <StudentExplain>Mysql</StudentExplain>

                        <StudentTitle>ABOUT ME</StudentTitle>
                        {/*<StudentExplain>커피 : 투썸 콜드브루 선호</StudentExplain>*/}
                        {/*<StudentExplain>운동 : 월수금 아침 9시마다 런데이 중</StudentExplain>*/}
                        <StudentExplain>블로그 : https://blog.naver.com/eunhe2322</StudentExplain>
                        <StudentExplain>Github : https://github.com/euni999</StudentExplain>


                    </TextWrapper2>
                    <ImgWrapper>
                        <Img src={img2} alt={""}/>
                    </ImgWrapper>


                </ExplainSection2>


            </ExplainWrapper>
        </LayoutContainer>
    );
};

export default StudentPage;