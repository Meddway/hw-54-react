import React, {useState} from 'react';
import './App.css';
import CellBox from "./Componets/Сell_box/СellBox";
import Counter from "./Componets/Counter/Counter";



function App() {
  const [attemptCount, setAttemptsCount] = useState({ count: 0 });

  const arrayCellBoxes = [];

  let randomNumber = (min: number, max: number) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  const randomCell = randomNumber(0, 35);

  let increaseAttemptsCount = () => {
    const attemptCountCopy = { ...attemptCount };
    attemptCountCopy.count = attemptCountCopy.count + 1;
    setAttemptsCount(attemptCountCopy);
  };

  for (let i = 0; i < 36; i++) {
    const withSymbol = randomCell === i;
    const cellBox = <CellBox key={i} withSymbol={withSymbol} increaseAttemptsCount={increaseAttemptsCount} />;
    arrayCellBoxes.push(cellBox);
  }

  return (
    <div className="App">
      {arrayCellBoxes}
      <div style={{ marginLeft: "150px" }}>
        <Counter attempts={attemptCount.count}></Counter>
        <button className="Button">reset</button>
      </div>
    </div>
  );
}

export default App;