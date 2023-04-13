/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDl85SH6xjoBkIPu8UwPHV1S22HEmvkq4s",
  authDomain: "tp2-arq-redes-servicios.firebaseapp.com",
  projectId: "tp2-arq-redes-servicios",
  storageBucket: "tp2-arq-redes-servicios.appspot.com",
  messagingSenderId: "914786110860",
  appId: "1:914786110860:web:cc0bc305c95ec11291daa9"
};




export function getFirebaseConfig() {
  return config;
}