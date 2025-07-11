// Firebase'e bağlanmak için gerekli yapı
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Senin Firebase yapılandırman
export const firebaseConfig = {
  apiKey: "AIzaSyCLp-t81vU5S1LDr76YKszeG1LcHwU0GZQ",
  authDomain: "okuma-testi.firebaseapp.com",
  projectId: "okuma-testi",
  storageBucket: "okuma-testi.firebasestorage.app",
  messagingSenderId: "820936161658",
  appId: "1:820936161658:web:0bd9c4dc043cfad0667ec3",
  measurementId: "G-2WBL96ETV1"

};

// Uygulama başlatılıyor
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore bağlantısını dışa aktar
export { db, collection, addDoc };
