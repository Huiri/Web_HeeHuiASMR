import styled from 'styled-components';
import {ReactComponent as TopIcon} from '../../assets/icons/TopIcon.svg';

export const BtnWrapper = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;

`;
export const TopBtn = styled.button`
  font-weight: bold;
  font-size: 15px;
  padding: 0.5rem 0.6rem;
  background: darkgrey;
  border: 2px solid grey;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #98aac4;
  }

`;

export const Icon = styled(TopIcon)`
    width : 1.6rem;
  height : 1.6rem;
   stoke : white;
`;