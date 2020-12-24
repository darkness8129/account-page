import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'common/components/form/FormButton';
import firebase from 'firebase/firebase-config';
import { Redirect } from 'react-router-dom';
import auth from 'firebase/firebaseAuth';
import { AuthContext } from 'common/provider/AuthProvider';

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
  const user = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    auth.signOut();
    setIsLoading(false);
  };

  // redirect when logged out
  if (!user) return <Redirect to="/signup" />;

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
