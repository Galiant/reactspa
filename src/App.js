import React, { useState } from "react";
import Home from "./Home";

function App() {
  const [user, setUser] = useState("Ray");
  return <Home user={user} onChange={(event) => setUser(event.target.value)} />;
}

export default App;
