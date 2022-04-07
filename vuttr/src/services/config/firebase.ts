import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDotyXrap9Y3JP2MVHC_zfvl64A9QDFio",
  authDomain: "vuttr-25ec7.firebaseapp.com",
  projectId: "vuttr-25ec7",
  storageBucket: "vuttr-25ec7.appspot.com",
  messagingSenderId: "76493439171",
  appId: "1:76493439171:web:4e324507eeab5569cc6276",
  measurementId: "G-EN2NH4SHJR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
