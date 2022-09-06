import styled from 'styled-components';
import {ReactComponent as GarbageIcon} from '../../assets/icons/GarbageIcon.svg';
import {ReactComponent as EditIcon} from '../../assets/icons/EditIcon.svg';

//실제 댓글창
export const CommentSection = styled.div`
  width : 100%;
  display : flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const CommentWrapper = styled.div`
  display : flex;
  align-items: center;
`

export const CommentItemStyle = styled.div`
  margin-bottom : 0.5rem;
  width : 95%;
  background: antiquewhite;
  border-radius: 0.7rem;
  

`

export const CommentUser = styled.span`
  font-weight : 600;
  font-size : 1.2rem;
  margin-left : 1rem;
`

export const CommentIconWrapper = styled.div`
  float : right;
  margin : -2rem 1rem 0 0;
  text-align: center;
`
export const CommentText = styled.p`
  margin : 0.7rem;
`

export const GarbageBtn = styled(GarbageIcon)`
  fill: #464646;
  width : 1.4rem;
  height : 1.4rem;
  cursor : pointer;
  &:hover {
    fill : black;
  }
`

export const EditBtn = styled(EditIcon)`
  fill: #464646;
  cursor : pointer;
  width : 1.6rem;
  height : 1.6rem;
  margin-right : 1.3rem;

  &:hover {
    fill : black;
    transition : all ease 0.4s 0s;
  }


`