import styled from 'styled-components';
import {ReactComponent as HeartIcon} from '../../assets/icons/HeartIcon.svg';
import {ReactComponent as PageIcon} from '../../assets/icons/PageIcon.svg';

//비디오 설명
export const TitleWrapper = styled.div`
    margin : 0 0 0 3.5rem;
`
export const VideoTitle = styled.h2`
    margin-bottom : 0.5rem;
    font-size : 2rem;  
`
export const VideoCreator = styled.p`
  font-size : 1.3rem;
  margin : 0 0 0.3rem 0.4rem;
`

//아이콘 부분
export const IconWrapper = styled.div`
  float : right;
  margin : -2rem 4rem 0 0;
`
export const HeartBtn = styled(HeartIcon)`
  width: 1.8rem;
  height: 1.8rem;
  fill: #383838;
  cursor : pointer;
  margin-right : 1.3rem;
  &:active, &:hover{
    fill : red;
  }
  
`

export const PageBtn = styled(PageIcon)`
  width: 1.8rem;
  height: 1.8rem;
  fill: #5b5b5b;
  cursor : pointer;


`
//비디오 부가 설명
export const SubWrapper = styled.div`
  margin : 1rem 0 0 7rem;

`
export const VideoSubTitle = styled.p`
  font-size : 1.3rem;
  font-weight : 600;
`
export const VideoSub = styled.p`
  margin-left : 1rem;
`
//비디오 출력 부분
export const VideoWrapper = styled.div`

`

export const VideoSection = styled.div`
  width : 85vw;
  height : 80vh;
  background: beige;
  margin: 2rem auto;

`

//댓글 부분
export const CommentWrapper = styled.div`
  margin : 0 0 0 3.5rem;

`

export const CommentTitle = styled.h1`
  margin-bottom : 0.5rem;
  font-size : 2rem

`

//댓글 입력 부분
export const CommentInputSection = styled.div`
  display : flex;
  align-items: center;
`
export const CommentInput = styled.input`
  font-size: 1.3rem;
  width: 80vw;
  height: 10vh;
  margin : 2rem 0;
  
  &:focus {
  }
`
export const CommentBtn = styled.button`
  width : 10vw;
  height : 11vh;
  cursor : pointer;
  font-size : 1.5rem;
`
//실제 댓글창
export const CommentSection = styled.div`
`