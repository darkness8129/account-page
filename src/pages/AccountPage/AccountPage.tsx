import React from 'react';
import styled from '@emotion/styled';
import Intro from './components/Intro/Intro';
import SignUp from './components/SignUp/SignUp';

const StyledAccountPage = styled.main`
  display: flex;
  height: 100vh;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const AccountPage = () => {
  return (
    <StyledAccountPage>
      <Intro />
      <SignUp />
    </StyledAccountPage>
  );
};

export default AccountPage;
