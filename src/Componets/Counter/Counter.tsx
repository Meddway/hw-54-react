import React from 'react';

interface IProps {
  attempts: number;
}

const Counter:React.FC<IProps> = ({attempts}) => {

  return (
    <div>
      <p className="Tries">Tries: {attempts} </p>
    </div>
  );
};

export default Counter;