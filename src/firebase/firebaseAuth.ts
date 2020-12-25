import firebase from './firebase-config';

export default {
  async signUp(email: string, password: string) {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
    return null;
  },
  async signOut() {
    try {
      const res = await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
      return error.message;
    }
    return null;
  },
};
