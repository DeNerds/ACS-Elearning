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

console.log("Hello");
let signin = document.getElementById("signin");
var currentUid = null;
firebase.auth().onAuthStateChanged(function(user) {
  // onAuthStateChanged listener triggers every time the user ID token changes.
  // This could happen when a new user signs in or signs out.
  // It could also happen when the current user ID token expires and is refreshed.
  let auth = document.getElementById("auth");
  let name = document.getElementById("name");
  let signin = document.getElementById("signin");
  if (user && user.uid != currentUid) {
    // Update the UI when a new user signs in.
    // Otherwise ignore if this is a token refresh.
    // Update the current user UID.

    auth.style.display = "none";

    signin.textContent = "Sign Out";
    name.style.display = "block";
    name.children[0].innerHTML = user.email;
  } else {
    // Sign out operation. Reset the current user UID.
    currentUid = null;
    signin.textContent = "Sign In";
    auth.style.display = "block";
    name.style.display = "none";
  }
});

signin.addEventListener("click", function(event) {
  if (event.target.textContent == "Sign Out") {
    event.preventDefault();
    firebase.auth().signOut();
  }
});
