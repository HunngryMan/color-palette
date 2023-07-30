import React from "react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

function Home() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <p style={{ display: "flex", flex: "row" }}>{color}</p>
    </div>
  );
}

export default Home;
