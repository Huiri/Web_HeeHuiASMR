import styled from 'styled-components';

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
export const VideoSub = styled.p`
  margin : 0.5rem 0 1rem 0.6rem;

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