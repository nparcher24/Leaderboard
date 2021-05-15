/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Hero } from "../sections/Hero";
import AboutTabs from "../sections/AboutTabs";
import About from "./About";
import FAQ from "./FAQ";
import { HeroEvents } from "./HeroEvents";
import Leaderboard from "./Leaderboard";
import Footer from "../sections/Footer";
import AccountPage from "../sections/AccountPage";
import firebase from "firebase/app";
import SignIn from "../components/SignIn";
import CTA from "../sections/CTA";
import FeedbackChick from "../components/FeedbackChick";

export default function LandingPage(props) {
  const firebaseApp = firebase.app();
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  // const [athletes, setAthletes] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [displaySignIn, setDisplaySignIn] = useState(false);
  const [currentTab, setCurrentTab] = React.useState("Hero Mission");
  const [showAccount, setShowAccount] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [authUser, setAuthUser] = React.useState(null);
  const [heroMissions, setHeroMissions] = React.useState([]);
  const [selectedHeroMission, setSelectedHeroMission] = React.useState(
    heroMissions[0]
  );
  const [showFeedbackChick, setShowFeedbackChick] = React.useState("");

  function TabToRender(props) {
    if (props.currentTab === "About") {
      return <About {...props} />;
    } else if (props.currentTab === "FAQ") {
      return <FAQ {...props} />;
    } else if (props.currentTab === "Leaderboard") {
      return <Leaderboard {...props} />;
    } else {
      return <div />;
    }
  }

  function configureAccount() {
    //Start by fetching the user's info from the firestore
    db.collection("athletes")
      .doc(authUser.email.toLowerCase())
      .set({
        email: authUser.email,
        id: authUser.uid,
      })
      .then(() => {
        console.log("New user written successfully");
      });
  }

  function createAthleteObject(doc) {
    // console.log("created athlete object");
    setCurrentUser(() => {
      return {
        ...doc.data(),
        birthDate: doc.data().birthDate ? doc.data().birthDate.toDate() : null,
        id: doc.id,
      };
    });
  }

  useEffect(() => {
    // Fetch the current use and configure the account if necessary
    if (authUser != null) {
      const observer = db
        .collection("athletes")
        // .where("email", "==", authUser.email)
        .doc(authUser.email)
        .onSnapshot((doc) => {
          if (doc.data() != null) {
            console.log("User successfully retrieved from firestore");

            db.collection("athletes")
              .doc(authUser.uid)
              .collection("registeredEvents")
              .onSnapshot((querySnapshot) => {
                const tempEvents = [];
                querySnapshot.forEach((doc) => {
                  if (doc.data() != null) {
                    var event = doc.data();
                    event.id = doc.id;
                    tempEvents.push(event);
                  }
                });

                setCurrentUser((prevUser) => {
                  return { ...prevUser, heroMissions: tempEvents };
                });
                // setShowAccount(true);
              });
            createAthleteObject(doc);
          } else {
            console.log("Creating new user entry in firestore");
            configureAccount();
          }
        });
      return () => observer();
    }
  }, [authUser]);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        // setIsSignedIn(!!user);
        if (user) {
          // console.log("Auth USER:");
          // console.log(user);
          setAuthUser(user);
          setIsSignedIn(true);

          // console.log("Current user's email is: " + user.email);
        } else {
          //User is not signed in
          setAuthUser(null);
          setIsSignedIn(false);
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // useEffect(() => {
  //   console.log("ATHLETES: ");
  //   console.log(athletes);
  // }, [athletes]);

  useEffect(() => {
    const heroEventsObserver = db
      .collection("heroEvents")
      .orderBy("date", "desc")
      .onSnapshot((querySnapshot) => {
        var tempEvents = [];

        querySnapshot.forEach((doc) => {
          // console.log("Hero Missions: " + doc.data());
          const newEvent = {
            ...doc.data(),
            date: doc.data().date.toDate(),
            id: doc.id,
          };
          // console.log("ID Is: ", newAthlete.id);
          tempEvents.push(newEvent);
        });
        // console.log("Events updated: " + tempEvents.length);
        setHeroMissions(tempEvents);
        setSelectedHeroMission(tempEvents[0]);
      });
    return () => heroEventsObserver();
  }, []);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: "/signedIn",
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: (success) => {
        setDisplaySignIn(false);
        setIsSignedIn(success);
      },
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div className="bg-primary">
      {displaySignIn ? (
        <SignIn
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
          displaySignIn={displaySignIn}
          setDisplaySignIn={setDisplaySignIn}
          uiConfig={uiConfig}
          auth={auth}
        />
      ) : null}

      <AccountPage
        showAccount={showAccount}
        setShowAccount={setShowAccount}
        currentUser={currentUser}
        db={db}
        heroMissions={heroMissions}
        setShowFeedbackChick={setShowFeedbackChick}
        selectedHeroMission={selectedHeroMission}
      />
      {showFeedbackChick !== "" ? (
        <FeedbackChick
          showFeedbackChick={showFeedbackChick}
          setShowFeedbackChick={setShowFeedbackChick}
        />
      ) : (
        <div />
      )}
      {/* <Header /> */}
      <Hero
        title="TRAIN AMERICAN CHALLENGE"
        description="Honor our community heroes by earning a coveted challenge coin."
        // setShowAccount={setShowAccount}
        // isSignedIn={isSignedIn}
        // displaySignIn={displaySignIn}
        // setDisplaySignIn={setDisplaySignIn}
      />
      <AboutTabs setCurrentTab={setCurrentTab} />
      {currentTab === "Hero Mission" ? <HeroEvents /> : <div />}

      <TabToRender
        currentTab={currentTab}
        showAccount={showAccount}
        setShowAccount={setShowAccount}
        isSignedIn={isSignedIn}
        displaySignIn={displaySignIn}
        setDisplaySignIn={setDisplaySignIn}
        db={db}
        auth={auth}
        currentUser={currentUser}
        heroMissions={heroMissions}
        selectedHeroMission={selectedHeroMission}
        setSelectedHeroMission={setSelectedHeroMission}
      />
      <CTA />
      <Footer />
    </div>
  );
}
