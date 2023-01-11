import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAobIUYANILXG0LxXLcCQ3AQItIOSO2B4U",
    authDomain: "moviehut-87624.firebaseapp.com",
    projectId: "moviehut-87624",
    storageBucket: "moviehut-87624.appspot.com",
    messagingSenderId: "722854090375",
    appId: "1:722854090375:web:e9d5aa23c4beb9b74dca22"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);