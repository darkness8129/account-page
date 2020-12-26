import React, { useEffect, useState } from 'react';
import firebase from 'firebase/firebase-config';

export const AuthContext = React.createContext({
  user: null,
  isAuthInitialized: false,
});

interface Props {
  children: React.ReactNode;
}

// need to provide registered user for all components in app
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(undefined);
  const [isAuthInitialized, setIsAuthInitialized] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // when user changed(null --> user) - app initialized
  useEffect(() => {
    if (user !== undefined) setIsAuthInitialized(true);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isAuthInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};
