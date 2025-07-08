
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLp-t81vU5S1LDr76YKszeG1LcHwU0GZQ",
  authDomain: "okuma-testi.firebaseapp.com",
  projectId: "okuma-testi",
  storageBucket: "okuma-testi.firebasestorage.app",
  messagingSenderId: "820936161658",
  appId: "1:820936161658:web:03f8891fa43044d4667ec3",
  measurementId: "G-TTKE36VBT9"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export { firebaseAuth, RecaptchaVerifier, signInWithPhoneNumber };
