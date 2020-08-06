import React, { useState } from "react";
import Welcome from "./Welcome";
import Home from "./Home";

function App() {
  const [user, setUser] = useState("Ray");
  return (
    <div>
      {user && (
        <Welcome
          user={user}
          onChange={(event) => setUser(event.target.value)}
        />
      )}
      <Home user={user} onChange={(event) => setUser(event.target.value)} />
    </div>
  );
}

export default App;
