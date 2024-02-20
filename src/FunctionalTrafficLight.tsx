import { useState } from "react";
export const FunctionalTrafficLight = () => {
  const [color, setColor] = useState<number>(0);
  const changeColor = (): void => {
    setColor((current: number) => (current + 1) % 3);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {/* Can I pass Any type on everything then no problem you know */}
        {/* I didnt know which props to pass so I tried some googling */}
        <div className={`circle ${color === 0 ? "red" : "black"}`}></div>
        <div className={`circle ${color === 2 ? "yellow" : "black"}`}></div>
        <div className={`circle ${color === 1 ? "green" : "black"}`}></div>
      </div>
      <button className="next-state-button" onClick={changeColor}>
        Next State
      </button>
    </div>
  );
};
