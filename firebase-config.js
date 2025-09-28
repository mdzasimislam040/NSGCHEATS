// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCy07Chve4OOoUgmu_4vQV8eOTLytPWn8s",
  authDomain: "black-f6b9f.firebaseapp.com",
  databaseURL: "https://black-f6b9f-default-rtdb.firebaseio.com",
  projectId: "black-f6b9f",
  storageBucket: "black-f6b9f.firebasestorage.app",
  messagingSenderId: "744905166117",
  appId: "1:744905166117:web:eb8935c202de7267121ecc",
  measurementId: "G-FX9WDYLDYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };