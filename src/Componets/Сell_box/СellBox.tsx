import React, {useState} from 'react';

interface ICellBoxProps extends React.PropsWithChildren {
  withSymbol: boolean;
  increaseAttemptsCount:() => void;
}


const CellBox: React.FC<ICellBoxProps> = ({withSymbol, increaseAttemptsCount}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      increaseAttemptsCount();
    }
  };

  const cellBoxStyle: React.CSSProperties = {
    background: 'white',
  };

  if (isClicked) {
    if(withSymbol) {
      cellBoxStyle.background = 'black';
    } else {
      cellBoxStyle.background = 'white';
    }
  }

  if (!isClicked) {
    cellBoxStyle.background = 'gray';
  }

  return (
    <div className="cellBox" onClick={handleClick} style={cellBoxStyle}></div>
  );
};

export default CellBox;

