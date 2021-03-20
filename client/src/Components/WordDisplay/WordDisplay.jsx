import React, { useState } from 'react';

const WordDisplay = () => {
  const [wordList, setWordList] = useState(['hello', 'world', '123']);

  const getWords = () => {};
  return (
    <div>
      {wordList.map((word) => {
        return <p>{word}</p>;
      })}
    </div>
  );
};

export default WordDisplay;
