import React from 'react';

interface ICellBoxProps extends React.PropsWithChildren {
  // taskText: string;

}


const cellBox:React.FC<ICellBoxProps> = () => {
  return (
    <div  style={{height: '18px', width: '18px'}} >

    </div>
  );
};

export default cellBox;