import React, { useState } from "react";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Meetings from "./Meetings";
import { Router } from "@reach/router";

function App() {
  const [user, setUser] = useState("Ray");
  return (
    <div>
      <Navigation
        user={user}
        onChange={(event) => setUser(event.target.value)}
      />
      {user && (
        <Welcome
          user={user}
          onChange={(event) => setUser(event.target.value)}
        />
      )}
      <Router>
        <Home
          path="/"
          user={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <Login path="/login" />
        <Meetings path="/meetings" />
        <Register path="/register" />
      </Router>
    </div>
  );
}

export default App;
