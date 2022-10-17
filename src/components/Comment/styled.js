import styled, {css} from 'styled-components';
import {ReactComponent as GarbageIcon} from '../../assets/icons/GarbageIcon.svg';
import {ReactComponent as EditIcon} from '../../assets/icons/EditIcon.svg';
import {ReactComponent as ConfirmIcon} from '../../assets/icons/ConfirmIcon.svg';

//실제 댓글창

export const CommentWrapper = styled.div`
  display : flex;
  align-items: center;
`;

export const CommentItemStyle = styled.div`
  margin-bottom : 0.5rem;
  width : 95%;
  background: antiquewhite;
  border-radius: 0.7rem;
  height : 100%;
  

`;

export const CommentUser = styled.span`
  font-weight : 600;
  font-size : 1.2rem;
  margin-left : 1rem;
  font-family: cookieregular, sans-serif;
`;

export const CommentIconWrapper = styled.div`
  float : right;
  margin : -2rem 1rem 0 0;
  text-align: center;
  display: flex;
  align-items: center;

  ${({ isEdit }) =>
        isEdit &&
        css`
          margin : -2.7rem 1rem 0 0;
    `}
`;
export const CommentText = styled.p`
  margin : 0.7rem;
  font-size : 1.1rem;
  font-family: lee, sans-serif;

`;

export const GarbageBtn = styled(GarbageIcon)`
  fill: #464646;
  width : 1.4rem;
  height : 1.4rem;
  cursor : pointer;
  &:hover {
    fill : black;
  }
`;

export const EditBtn = styled(EditIcon)`
  fill: #464646;
  cursor : pointer;
  width : 1.6rem;
  height : 1.6rem;
  margin-right : 1.3rem;

  &:hover {
    fill : #152C70;
    transition : all ease 0.4s 0s;
  }
  
`;

export const EditInput = styled.input`
  background: antiquewhite;
  margin: 0 0 0 0.5rem;
  width : 50vw;
  font-size : 1rem;
  font-family: lee, sans-serif;

  font-weight: 600;
  border-style : none;
  &:focus {
    outline: none;
  }
  

`;

export const EditWrapper = styled.div`
  display : flex;
  height : 100%;
  min-height: 2.8rem;
  align-items: center;
  margin-bottom : 0.5rem;

`;
export const EditConfirmBtn = styled(ConfirmIcon)`
  cursor: pointer;
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.3rem;
  fill: #383838;

  &:hover {
    fill: #4242be;

  }
`;