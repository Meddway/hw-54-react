import React, { useState, useEffect } from 'react';

interface ICellBoxProps {
  withSymbol: boolean;
  increaseAttemptsCount: () => void;
  reset: boolean;
}

const CellBox: React.FC<ICellBoxProps> = ({ withSymbol, increaseAttemptsCount, reset }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbolClicked, setSymbolClicked] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsClicked(false);
      setSymbolClicked(false);
    }
  }, [reset]);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setSymbolClicked(withSymbol);
      increaseAttemptsCount();
    }
  };

  const cellBoxStyle: React.CSSProperties = {
    background: 'gray',
  };

  if (isClicked) {
    if (symbolClicked) {
      cellBoxStyle.background = 'black';
    } else {
      cellBoxStyle.background = 'white';
    }
  }

  return <div className="cellBox" onClick={handleClick} style={cellBoxStyle}></div>;
};

export default CellBox;
