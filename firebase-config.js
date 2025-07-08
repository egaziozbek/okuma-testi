// Firebase'e bağlanmak için gerekli yapı
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Senin Firebase yapılandırman
const firebaseConfig = {
  apiKey: "AIzaSyC6K7-iL42jDIIvtZcCYu5DJnvE912JMLY",
  authDomain: "pelikankolejidemo.firebaseapp.com",
  projectId: "pelikankolejidemo",
  storageBucket: "pelikankolejidemo.firebasestorage.app",
  messagingSenderId: "373128273356",
  appId: "1:373128273356:web:8f7cd57198c80414b31169",
  measurementId: "G-YBSHMVQDF2"
};

// Uygulama başlatılıyor
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore bağlantısını dışa aktar
export { db, collection, addDoc };
