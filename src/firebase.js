// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW4hfn99YoU67Nys8cJLbylpIhlP64UeM",
  authDomain: "realtor-clone-react-97dd7.firebaseapp.com",
  projectId: "realtor-clone-react-97dd7",
  storageBucket: "realtor-clone-react-97dd7.appspot.com",
  messagingSenderId: "734237731077",
  appId: "1:734237731077:web:6926f8d95cf61bcda16f6c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();