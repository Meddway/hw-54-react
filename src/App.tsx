import React, { useState } from 'react';
import './App.css';
import CellBox from './Componets/Cell_box/CellBox';
import Counter from './Componets/Counter/Counter';

function App() {
  const [attemptCount, setAttemptsCount] = useState({ count: 0 });
  const [reset, setReset] = useState(false);

  const arrayCellBoxes = [];

  let randomNumber = (min:number, max:number) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  const randomCell = randomNumber(0, 35);

  let increaseAttemptsCount = () => {
    setAttemptsCount((prevCount) => ({ count: prevCount.count + 1 }));
  };

  let handleReset = () => {
    setAttemptsCount({ count: 0 });
    setReset(true);
  };

  for (let i = 0; i < 36; i++) {
    const withSymbol = randomCell === i;
    const cellBox = (
      <CellBox key={i} withSymbol={withSymbol} increaseAttemptsCount={increaseAttemptsCount} reset={reset} />
    );
    arrayCellBoxes.push(cellBox);
  }

  return (
    <div className="App">
      {arrayCellBoxes}
      <div style={{ marginLeft: '150px' }}>
        <Counter attempts={attemptCount.count} />
        <button className="Button" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
