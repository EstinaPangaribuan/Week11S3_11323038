import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("WELCOME");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Estina Pangaribuan(11323038)");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="Tulislah Nama" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
