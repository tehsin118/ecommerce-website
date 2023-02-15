import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4GUishqbUfL1xtzZ4KUOvZyBMbsWh2_Y",
  authDomain: "fir-tutorial-77b40.firebaseapp.com",
  projectId: "fir-tutorial-77b40",
  storageBucket: "fir-tutorial-77b40.appspot.com",
  messagingSenderId: "1002021753047",
  appId: "1:1002021753047:web:0f15251878066c1274e092",
  measurementId: "G-1NPRTXSRKF",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
