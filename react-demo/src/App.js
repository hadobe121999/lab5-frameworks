import React, { useState } from "react";

export default function App({ name = "Guest" }) {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>
      {show && <p>This is a toggleable message!</p>}
    </div>
  );
}
