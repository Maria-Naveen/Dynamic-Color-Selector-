import { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import ColorDisplay from "./components/ColorDisplay";
const App = () => {
  const [color, setColor] = useState("red");
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <ColorSelector setColor={setColor}></ColorSelector>
      <ColorDisplay color={color}></ColorDisplay>
    </div>
  );
};

export default App;
