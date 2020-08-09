import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import firebase from "./Firebase";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Meetings from "./Meetings";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const ref = firebase.database().ref("user");

    ref.on("value", (snapshot) => {
      let FbUser = snapshot.val();
      setUser(FbUser);
    });
  }, [user]);

  return (
    <div>
      <Navigation user={user} />
      {user && <Welcome user={user} />}
      <Router>
        <Home path="/" user={user} />
        <Login path="/login" />
        <Meetings path="/meetings" />
        <Register path="/register" />
      </Router>
    </div>
  );
}

export default App;
