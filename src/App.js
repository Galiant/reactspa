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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(FbUser => {
      if (FbUser) {
        setUser(FbUser);
        setDisplayName(FbUser.displayName);
        setUserID(FbUser.uid);
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

  return (
    <div>
      <Navigation user={user} />
      {user && <Welcome userName={displayName} />}
      <Router>
        <Home path="/" user={user} />
        <Login path="/login" />
        <Meetings path="/meetings" />
        <Register path="/register" registerUser={registerUser} />
      </Router>
    </div>
  );
}

export default App;
