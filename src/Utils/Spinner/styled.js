import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(231, 231, 231, 0.9);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font-size: 1rem;
  font-family: geonggimedium,sans-serif;
  text-align: center;
`;
