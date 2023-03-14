import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAr0Gn9TD6fzBHWsyj1VelRhJk0-zHUxAY",
  authDomain: "healthmanager-pb.firebaseapp.com",
  projectId: "healthmanager-pb",
  storageBucket: "healthmanager-pb.appspot.com",
  messagingSenderId: "142985918222",
  appId: "1:142985918222:web:611b367311321f8034895f"
};

export const app = initializeApp(firebaseConfig);