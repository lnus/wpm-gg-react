import React, { useContext } from 'react';
import { GameStateContext } from '../Components/TypeTest/GameStateContext';

const Demo = () => {
  const { targetWords, timer } = useContext(GameStateContext);

  return (
    <div>
      {/* {targetWords.map((word) => {
        return <div>{word}</div>;
      })} */}
    </div>
  );
};

export default Demo;
