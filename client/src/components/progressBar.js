import React, { useState, useEffect } from "react";
import "./progressBar.css";

const ProgressBar = ({ stopValue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < stopValue) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          return newProgress <= stopValue ? newProgress : stopValue;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [progress, stopValue]);

  return (
    <div className="progress">
      <div className="bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;

