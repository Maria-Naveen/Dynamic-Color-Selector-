const ColorDisplay = ({ color }) => {
  return (
    <div className={`w-24 h-24 bg-${color}-500 text-center`}>I am {color}</div>
  );
};

export default ColorDisplay;
