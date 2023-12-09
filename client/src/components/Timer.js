import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ initialTime, onTimeUpdate }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      onTimeUpdate(time);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onTimeUpdate]);

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
