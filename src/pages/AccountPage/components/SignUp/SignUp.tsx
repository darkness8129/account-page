import React from 'react';
import styled from '@emotion/styled';
import SignUpForm from './SignUpForm';

const StyledSignUp = styled.article`
  width: 67%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: Roboto, sans-serif;

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 660px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-family: Cera Pro, sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: black;
  opacity: 0.9;
`;

const SignUp = () => {
  return (
    <StyledSignUp>
      <Container>
        <Title>Get Started!</Title>
        <SignUpForm />
      </Container>
    </StyledSignUp>
  );
};

export default SignUp;
