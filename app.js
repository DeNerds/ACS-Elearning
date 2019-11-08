 var firebaseConfig = {
     apiKey: "AIzaSyA9_WVQybHH647BFa34VVmWBZyHrn17_Sg",
    authDomain: "elearning-45747.firebaseapp.com",
    databaseURL: "https://elearning-45747.firebaseio.com",
    projectId: "elearning-45747",
    storageBucket: "elearning-45747.appspot.com",
    messagingSenderId: "838740883930",
    appId: "1:838740883930:web:aeb90860263ea1a33ca8e3",
    measurementId: "G-2QHQKP5GWV"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


 var ui = new firebaseui.auth.AuthUI(firebase.auth());
 ui.start("#firebase-auth", {
     signInOptions: [
         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         firebase.auth.EmailAuthProvider.PROVIDER_ID
     ],

     callbacks: {
         signInSuccessWithAuthResult: function (res, redirectUrl) {

             return true;
         },

         signInSuccessUrl: "/Heaven.html"
     }
 })