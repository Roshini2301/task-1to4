import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const focusTextBox = () => {
    inputRef.current.focus();
  };

  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple timers
    setIsTimeUp(false);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimeLeft(10);
    setIsTimeUp(false);
  };

  return (
    <div className="container">
      <div className="input-section">
        <input
          ref={inputRef}
          type="text"
          placeholder="Focus me!"
          className="text-box"
          autoFocus
        />
        <button className="btn" onClick={focusTextBox}>
          Focus Box
        </button>
      </div>
      <div className="timer-section">
        <p className={`timer ${isTimeUp ? "time-up" : ""}`}>
          {isTimeUp ? "Time’s Up!" : `Time Left: ${timeLeft}s`}
        </p>
        <div className="button-group">
          <button className="btn" onClick={startTimer}>
            Start Timer
          </button>
          <button className="btn" onClick={stopTimer}>
            Stop Timer
          </button>
          <button className="btn" onClick={resetTimer}>
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
