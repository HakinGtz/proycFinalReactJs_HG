/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const firebaseConfig = {
    apiKey: "AIzaSyDf7DSuxfj5oZZshyYsJXdg3FkN--kKsWo",
    authDomain: "ecommercehgbiomedics.firebaseapp.com",
    projectId: "ecommercehgbiomedics",
    storageBucket: "ecommercehgbiomedics.appspot.com",
    messagingSenderId: "536668061917",
    appId: "1:536668061917:web:bb498c55a41f151cebdb34",
    measurementId: "G-LZFPNDF7NG"
  };
  
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
