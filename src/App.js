import React from "react";
import firebase from "firebase";
import LandingPage from "./pages/LandingPage";

function App(...props) {
  const config = {
    apiKey: "AIzaSyApMJDBNAYeomatcvnCcOB76eIpRdORHMc",
    authDomain: "trainamericanchallenge.com",
    projectId: "leaderboard-d5992",
    storageBucket: "leaderboard-d5992.appspot.com",
    messagingSenderId: "76465362834",
    appId: "1:76465362834:web:a662d074145d2133e2534b",
    measurementId: "G-T330LTJJD0",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  return (
    <div class="bg-primary">
      <LandingPage />
    </div>
  );
}

export default App;
