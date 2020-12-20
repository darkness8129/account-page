import React from 'react';
import styled from '@emotion/styled';
import Intro from './Intro/Intro';

const StyledAccountPage = styled.main`
  display: flex;
  height: 100vh;
`;

const AccountPage = () => {
  return (
    <StyledAccountPage>
      <Intro />
      <article />
    </StyledAccountPage>
  );
};

export default AccountPage;
