// Firebase configuration of "Lab of the Unreadable".
// These values are public by design: access is enforced by the Firestore rules, not by secrecy.
export const firebaseConfig = {
  apiKey: "AIzaSyAkGIJXlH0EVL6vuuxjTs0bm2FuO7Yw6vI",
  authDomain: "lab-of-the-unreadable.firebaseapp.com",
  projectId: "lab-of-the-unreadable",
  storageBucket: "lab-of-the-unreadable.firebasestorage.app",
  messagingSenderId: "1039644697534",
  appId: "1:1039644697534:web:17bce9dafa43939e5d0fef"
};

// The Google account that acts as doorkeeper (the same address goes into firestore.rules).
export const KEEPER_EMAIL = "antoniodiavoli@gmail.com";

// Default room, used when the link has no ?room=… parameter.
export const DEFAULT_ROOM = "room-01";

export const SDK = "https://www.gstatic.com/firebasejs/10.12.2";