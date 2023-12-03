// Bubble.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Bubble = ({ type, color }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Fetch data from the backend based on the progress type
    fetch(`/api/${type}`)
      .then((response) => response.json())
      .then((data) => setPercentage(data.percentage))
      .catch((error) => console.error(`Error fetching ${type} data:`, error));
  }, [type]);

  return (
    <div className="bubble" style={{ backgroundColor: color }}>
      {`${type}: ${percentage}%`}
    </div>
  );
};

Bubble.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Bubble;
