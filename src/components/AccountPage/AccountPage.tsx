import React from 'react';
import styled from '@emotion/styled';
import Intro from './Intro/Intro';
import SignUp from './SignUp/SignUp';

const StyledAccountPage = styled.main`
  display: flex;
  height: 100vh;
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
