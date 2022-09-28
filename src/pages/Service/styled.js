import styled from 'styled-components';
import {ReactComponent as SoundIcon} from '../../assets/icons/SoundIcon.svg';
import {ReactComponent as Note1Icon} from '../../assets/icons/Note1Icon.svg';
import {ReactComponent as Note2Icon} from '../../assets/icons/Note2Icon.svg';
import {ReactComponent as Note3Icon} from '../../assets/icons/Note3Icon.svg';
import {ReactComponent as Note4Icon} from '../../assets/icons/Note4Icon.svg';

export const LayoutContainer = styled.div`
   background: aliceblue;
  width : 100vw;
  height : 100vh;
  display: flex;
  flex-direction: column;
`

export const ServiceTitle = styled.p`
  font-size: 2rem;
  font-family: cookieregular, sans-serif;
  margin : 3rem 0 0 3rem;
`

export const ServiceSubTitle = styled.p`
    font-size : 1.4rem;
  font-family: geonggimedium, sans-serif;
  margin : 1rem 0 0 3.5rem;

`
export const IconWrapper = styled.div`
`
export const SoundGraph = styled(SoundIcon)`
  margin : 0;
  width : 5rem;

`
export const Note1 = styled(Note1Icon)`
  margin : 1rem 0 -1.4rem 3rem;
  width : 2.8rem;

`
export const Note2 = styled(Note2Icon)`
  margin : 0 0 -1rem 5rem;
  width : 2rem;

`
export const Note3 = styled(Note3Icon)`
  margin : 0 0 1rem 4rem;
  width : 3.4rem;

`
export const Note4 = styled(Note4Icon)`
  margin : 0 0 2rem 2rem;
  width : 2.3rem;

`
export const IconContainer = styled.div`
  margin : 1rem 0 0 5rem;

`
export const TextContainer = styled.div`
  margin : 1rem 0 0 4rem;

`
export const ServiceExplain = styled.p`
    font-size: 1.2rem;
  font-family: lee, sans-serif;
`
export const Section = styled.div`
  display: flex;
`