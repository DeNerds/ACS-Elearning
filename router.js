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

 let db = firebase.firestore();


 let teacher = document.getElementById("teacher");
 let home = document.getElementById("home");
 let description = document.getElementById("description");
 let title = document.getElementById("title");

 var routerPage = function (teacherText, homeUrl, descriptionText, titleText) {
     teacher.textContent = teacherText;
     home.style.backgroundImage = homeUrl;
     description.textContent = descriptionText;
     title.textContent = titleText;
 }