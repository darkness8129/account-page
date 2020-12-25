import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'common/components/form/FormButton';
import { Redirect } from 'react-router-dom';
import auth from 'firebase/firebaseAuth';
import { AuthContext } from 'common/provider/AuthProvider';
import Logo from 'common/components/Logo/Logo';
import Header from 'common/components/Header/Header';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: Cera Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.9);
`;

const SignOutButton = styled(Button)`
  max-width: 300px;
  margin-top: 55px;
`;

const Home = () => {
  const user = useContext(AuthContext);
  console.log(`here ${user}`);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Welcome!</Title>
        <SignOutButton disabled={false} onClick={handleSignOut}>
          Sign Out
        </SignOutButton>
      </Container>
    </>
  );
};

export default Home;
