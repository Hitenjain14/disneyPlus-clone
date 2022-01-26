import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBH7z6qKJAZvpNf2d-QBL7kGJHksh4YhtA',
  authDomain: 'disney-clone-fa394.firebaseapp.com',
  projectId: 'disney-clone-fa394',
  storageBucket: 'disney-clone-fa394.appspot.com',
  messagingSenderId: '775866508103',
  appId: '1:775866508103:web:9c87b7f2cf7ce6539a2262',
  measurementId: 'G-JM6D02ZCL4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
