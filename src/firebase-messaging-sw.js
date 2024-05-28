// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCL3Ijhsnuem2ekAB8K6FUN45JNK_xf_Ks",
  authDomain: "goodlaw-ba624.firebaseapp.com",
  databaseURL: "https://goodlaw-ba624-default-rtdb.firebaseio.com",
  projectId: "goodlaw-ba624",
  storageBucket: "goodlaw-ba624.appspot.com",
  messagingSenderId: "533051344103",
  appId: "1:533051344103:web:d7c83f84b7f12b69ec8e42",
  measurementId: "G-YGSPHMN1H3"
};

// eslint-disable-next-line no-undef
const app = initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});