import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBXuDFmDoe3wr5ciT946XJ2nAPMiGX-FeI",
  authDomain: "test-netlify-ed436.firebaseapp.com",
  projectId: "test-netlify-ed436",
  storageBucket: "test-netlify-ed436.appspot.com",
  messagingSenderId: "2913975810",
  appId: "1:2913975810:web:ce00b8c745fe94ec57b11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
