import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);
  const intervalRef = useRef(null);

  useEffect(() => {
    {/*console.log("Timer started!");*/}

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      {/*console.log("Timer stopped!");*/}
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalRef.current);
      onTimeUp(); // Notify the parent component when the time is up
    }
  }, [time, onTimeUp]);

  const calculatePercentage = () => {
    return ((time / initialTime) * 100).toFixed(2);
  };

  const progressGradient = `conic-gradient(
    #F3F497 ${calculatePercentage()}%,/* green */
    #FFC93D 0%, /* red */
    #000000 100%                 /* Black */
  )`;

  return (
    <div className="timer-container">
      <div className="timer" style={{ background: progressGradient }}>
        <p>
          {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default Timer;