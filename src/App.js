import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";
import firebase from "./Firebase";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Meetings from "./Meetings";

function App() {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [userID, setUserID] = useState(null);
  const [meetings, setMeetings] = useState(null);
  const [howManyMeetings, setHowManyMeetings] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(FbUser => {
      if (FbUser) {
        setUser(FbUser);
        setDisplayName(FbUser.displayName);
        setUserID(FbUser.uid);

        const meetingsRef = firebase.database().ref(`meetings/${FbUser.uid}`);

        meetingsRef.on("value", snapshot => {
          let meetings = snapshot.val();
          let meetingsList = [];

          for (let item in meetings) {
            meetingsList.push({
              meetingId: item,
              meetingName: meetings[item].meetingName,
            });
          }

          setMeetings(meetingsList);
          setHowManyMeetings({ howmanyMeetings: meetingsList.length });
        });
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const registerUser = userName => {
    firebase.auth().onAuthStateChanged(FbUser => {
      FbUser.updateProfile({
        displayName: userName,
      }).then(() => {
        setUser(FbUser);
        setDisplayName(FbUser.displayName);
        setUserID(FbUser.uid);
      });
      navigate("/meetings");
    });
  };

  const logoutUser = e => {
    e.preventDefault();
    setUser(null);
    setDisplayName(null);
    setUserID(null);

    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/login");
      });
  };

  const addMeeting = meetingName => {
    const ref = firebase.database().ref(`meetings/${user.uid}`);

    ref.push({ meetingName: meetingName });
  };

  console.log(`MEETINGS: ${meetings}`);

  return (
    <div>
      <Navigation user={user} logoutUser={logoutUser} />
      {user && <Welcome userName={displayName} logoutUser={logoutUser} />}
      <Router>
        <Home path="/" user={user} />
        <Login path="/login" />
        <Register path="/register" registerUser={registerUser} />
        {meetings && (
          <Meetings
            path="/meetings"
            meetings={meetings}
            addMeeting={addMeeting}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
