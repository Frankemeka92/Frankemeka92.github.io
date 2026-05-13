const firebaseConfig = {
  apiKey: "AIzaSyB1eCBz0MU5nV8pmSVeWmddXo7WPmbuwTQ",
  authDomain: "attendance-91a5e.firebaseapp.com",
  databaseURL: "https://attendance-91a5e-default-rtdb.firebaseio.com",
  projectId: "attendance-91a5e",
  storageBucket: "attendance-91a5e.firebasestorage.app",
  messagingSenderId: "192391742455",
  appId: "1:192391742455:web:0d7f773f3e4e3f65e8e4f2",
  measurementId: "G-X1J35F427Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

console.log ('connected to firebase')
function logout(){
  firebase.auth.signOut().then(() => {
    window.location = "index.html";
  }).catch((error) => {
    alert("error while trying to logout");
  } 
}