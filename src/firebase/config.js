// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// ⚠️ REMPLACE AVEC TES DONNÉES DE TON PROJET FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "ensa-vote-app.firebaseapp.com",
  databaseURL: "https://ensa-vote-app-default-rtdb.firebaseio.com", // IMPORTANT !
  projectId: "ensa-vote-app",
  storageBucket: "ensa-vote-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Exporter les services
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
