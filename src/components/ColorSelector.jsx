const ColorSelector = ({ setColor }) => {
  return (
    <div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </div>
  );
};

export default ColorSelector;
