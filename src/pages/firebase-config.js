import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFhB-MIDfrGZIgYKE2Etbgopn29TzexAs",
  authDomain: "beee-eab27.firebaseapp.com",
  projectId: "beee-eab27",
  storageBucket: "beee-eab27.appspot.com",
  messagingSenderId: "770816867452",
  appId: "1:770816867452:web:7fb75a0a297b348013ddf9",
  measurementId: "G-FK6ZVH9GLE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);