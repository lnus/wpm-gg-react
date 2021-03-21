import React, { useState, useRef, useCallback } from 'react';
import randomWords from 'random-words';
import './TypeTest.css';

const TypeTest = () => {
  const [targetWords, setTargetWords] = useState(
    randomWords({ exactly: 10, maxLength: 7 })
  );
  const [completedWords, setCompletedWords] = useState([]);
  const [currentTarget, setCurrentTarget] = useState(targetWords[0]);
  const [currentUserInput, setCurrentUserInput] = useState('');
  const [textWidth, setTextWidth] = useState(0);
  const [currentWordCorrect, setCurrentWordCorrect] = useState(true);
  const inputRef = useRef();

  const completedWordRef = useCallback((node) => {
    if (node !== null) {
      setTextWidth(node.getBoundingClientRect().width);
    }
  });

  const isCurrentWordCorrect = (word) => {
    if (currentTarget.startsWith(word) || word === '' || word === ' ') {
      setCurrentWordCorrect(true);
    } else {
      setCurrentWordCorrect(false);
    }
  };

  const handleSubmit = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setCurrentWordCorrect(true);

      // Checks if the user has inputted the correct word (true|false)
      const correctWordInput = currentTarget === currentUserInput.trim();
      const completedWordEntry = {
        word: currentTarget,
        correct: correctWordInput,
      };

      // Updates the completedWords state
      const newCompletedWords = completedWords.concat([completedWordEntry]);
      setCompletedWords(newCompletedWords);

      // Updates the margin using the calculated width of the completedWords
      // const newTextWidth = completedWordRef.getBoundingClientRect().width;
      // setTextWidth(newTextWidth);

      // Updates the currentTarget state
      const newTargetWord = targetWords[1];
      setCurrentTarget(newTargetWord);

      // Updates the targetWords state, appending a new target word
      setTargetWords([
        ...targetWords.slice(1),
        randomWords({ exactly: 1, maxLength: 7 })[0],
      ]);
      console.log(targetWords);

      // Resets the user input
      inputRef.current.value = null;
      setCurrentUserInput('');

      // Prevents a refresh on the submit
      e.preventDefault();
    }
  };

  return (
    <div className="type-test-wrapper">
      <div
        className={'word-container-wrapper'}
        style={{ padding: `0 0 0 calc(50% - ${textWidth}px` }}
      >
        <div
          className="word-container word-container__completed-words"
          ref={completedWordRef}
        >
          {/* TODO: make this more dynamic so we can display more elements */}
          {completedWords.slice(-5).map((wordData) => {
            return (
              <div
                className={`word ${
                  wordData.correct ? 'word--correct' : 'word--incorrect'
                }`}
              >
                {wordData.word}
              </div>
            );
          })}
        </div>
        <div className="word-container word-container__current-word">
          <div
            className={`word word__current-target${
              !currentWordCorrect ? ' word__current-target--incorrect' : ''
            }`}
          >
            {currentTarget}
          </div>
        </div>
        <div className="word-container word-container__incoming-words">
          {targetWords.map((word) => {
            if (word !== currentTarget)
              return <div className={'word'}>{word}</div>;
          })}
        </div>
      </div>
      <div className={'input-wrapper'}>
        <div className={'input-field-wrapper'}>
          <input
            ref={inputRef}
            style={{ padding: '0 0 0 50%' }}
            className="input-field"
            contentEditable
            autoFocus
            spellCheck="false"
            placeholder="type here"
            autoComplete="off"
            autoCapitalize="off"
            tabIndex="0"
            onFocus={(e) => {
              e.currentTarget.placeholder = '';
            }}
            onBlur={(e) => {
              e.currentTarget.placeholder = 'type here';
            }}
            onInput={(e) => {
              setCurrentUserInput(e.currentTarget.value);
              isCurrentWordCorrect(e.currentTarget.value);
            }}
            onKeyPress={(e) => {
              handleSubmit(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypeTest;
