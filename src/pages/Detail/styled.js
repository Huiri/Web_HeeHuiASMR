import styled, {css} from 'styled-components';
import {ReactComponent as HeartIcon} from '../../assets/icons/HeartIcon.svg';
import {ReactComponent as PageIcon} from '../../assets/icons/PageIcon.svg';
import {ReactComponent as FilledHeartIcon} from '../../assets/icons/FilledHeartIcon.svg';

//비디오 설명
export const TitleWrapper = styled.div`
    margin : 0 0 0 3.5rem;
`;
export const VideoTitle = styled.h2`

  margin-top : 2rem;
  margin-bottom : 1rem;
  margin-left : 5rem;
  width : 85%;
    font-size : 1.9rem; 
  font-family: lee, sans-serif;
`;
export const VideoCreator = styled.p`
  font-size : 1.4rem;
  margin : 0 5rem 0.3rem 0.4rem;
  font-family: lee, sans-serif;
`;

//아이콘 부분
export const IconWrapper = styled.div`
  float : right;
  margin : -2rem 4rem 0 0;
`;
export const HeartBtn = styled(HeartIcon)`
  width: ${props => props.size || "1.8rem"};
  height: ${props => props.size || "1.8rem"};
  fill: #383838;
  cursor : pointer;
  margin-right : 5rem;
  ${({ isLiked }) =>
        isLiked &&
          css`
      fill : red;
    `}
  &:hover{
    fill : red;
  }
  
`;
export const LayoutContainer = styled.div`
  height : 100%;
  min-height : 175vh;

  @media(max-width: 991px){
    min-height : 160vh;

  }
`;

export const PageBtn = styled(PageIcon)`
  width: 1.8rem;
  height: 1.8rem;
  cursor : pointer;
  ${({ isAdded }) =>
        isAdded &&
      css`
      fill : #383838;
    `}

  &:hover {
    fill : #383838;
    

  }
  
`;
export const FilledHeartBtn = styled(FilledHeartIcon)`
  fill : red;
  margin-right : 5rem;
  cursor : pointer;
  width: ${props => props.size || "1.8rem"};
  height: ${props => props.size || "1.8rem"};

`;
//비디오 부가 설명
export const SubWrapper = styled.div`
  margin : 1rem 0 0 8rem;
  @media (max-width : 991px){
    margin-left : 3rem;
  }

`;
export const VideoSubTitle = styled.p`
  font-size : 1.6rem;
  margin-bottom : 0;
  font-weight: bold;
  font-family: lee, sans-serif;

`;
export const VideoSub = styled.p`
  font-size: 1.3rem;
  width : 87%;
  margin : 1rem 0 3rem 0.5rem;
  font-family: lee, sans-serif;

`;
//비디오 출력 부분
export const VideoWrapper = styled.div`
  position: relative;
  width: 80vw;
  height : 100vh;
  margin : 2rem auto;
  @media (max-width : 991px){
    height : 65vh;
  }
`;

export const VideoSection = styled.div`
  width : 85vw;
  height : 80vh;
  background: beige;
  margin: 2rem auto;

`;

//댓글 부분
export const CommentContainer = styled.div`
  margin : 0 0 0 3.5rem;

`;

export const CommentTitle = styled.h1`
  margin-top : 1.7rem;
  font-size : 2rem;
  font-family : lee, sans-serif;
  font-weight: bold;
  margin-bottom : 1rem;
  @media(max-width: 991px){
    margin-left : -1rem;
  }
`;

//댓글 입력 부분
export const CommentInputWrapper = styled.div`
  display : flex;
  align-items: center;
  justify-content: center;
`;
export const CommentInput = styled.input`
  font-size: 1.3rem;
  width: 80vw;
  height: 10vh;
  margin : 1rem 0;
  font-family: lee, sans-serif;
  @media(max-width: 991px){
    width: 74vw;
  }
  &:focus {
  }
`;
export const CommentBtn = styled.button`
  width : 10vw;
  height : 11vh;
  cursor : pointer;
  font-size : 1.3rem;
  font-family: cookieregular, sans-serif;
  @media(max-width: 991px){
    width: 13vw;
  }
`;
//실제 댓글창
export const CommentSection = styled.div`
  width : 100%;
  display : flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CommentWrapper = styled.div`
  display : flex;
  align-items: center;
`;

export const CommentItem = styled.div`
  margin-bottom : 0.5rem;
  width : 95%;
  background: antiquewhite;
  border-radius: 0.7rem;
  

`;

export const CommentUser = styled.span`
  font-weight : 600;
  font-size : 1.2rem;
  margin-left : 1rem;
`;

export const CommentIconWrapper = styled.div`
  float : right;
  margin : -2rem 1rem 0 0;
`;
export const CommentText = styled.p`
  margin : 0.7rem;
`;
export const VideoViewer = styled.iframe`

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;