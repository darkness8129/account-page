import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'common/components/form/FormButton';
import firebase from 'firebase-config';
import { Redirect } from 'react-router-dom';

const StyledSignOut = styled.main`
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

const SignOut = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await firebase.auth().signOut();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // redirect when logged out
  if (!firebase.auth().currentUser) return <Redirect to="/signup" />;

  return (
    <StyledSignOut>
      <Title>Welcome!</Title>
      <SignOutButton disabled={isLoading} onClick={handleClick}>
        Sign Out
      </SignOutButton>
    </StyledSignOut>
  );
};

export default SignOut;
