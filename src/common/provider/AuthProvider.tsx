import React, { useEffect, useState } from 'react';
import firebase from 'firebase/firebase-config';

export const AuthContext = React.createContext(null);

interface Props {
  children: React.ReactNode;
}

// need to provide registered user for all components in app
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
