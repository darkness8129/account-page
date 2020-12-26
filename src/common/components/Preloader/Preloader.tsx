import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const StyledPreloader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid black;
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: black transparent transparent transparent;
  }
  & div:nth-of-type(1) {
    animation-delay: -0.45s;
  }
  & div:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  & div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Preloader = () => {
  return (
    <Container>
      <StyledPreloader>
        <div />
        <div />
        <div />
        <div />
      </StyledPreloader>
    </Container>
  );
};

export default Preloader;
