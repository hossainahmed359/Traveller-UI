import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

// Firebase initialize
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;