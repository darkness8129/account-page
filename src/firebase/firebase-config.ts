import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA-Cp5UfPF5Z-uDQ1NRuQoKTe60oDQwjAE',
  authDomain: 'account-page-60dc5.firebaseapp.com',
  projectId: 'account-page-60dc5',
  storageBucket: 'account-page-60dc5.appspot.com',
  messagingSenderId: '841578189345',
  appId: '1:841578189345:web:b807bd6f207b5ba4fcc960',
};
firebase.initializeApp(firebaseConfig);

export default firebase.initializeApp(firebaseConfig);
