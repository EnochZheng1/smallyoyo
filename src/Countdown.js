import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate, onCountdownEnd }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    if (timeLeft <= 0) {
      onCountdownEnd();
      return;
    }
    // Update the countdown every second
    const timerId = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, targetDate, onCountdownEnd]);

  function getTimeLeft(targetDate) {
    const difference = targetDate.getTime() - new Date().getTime();
    return difference > 0 ? difference : 0;
  }

  function formatTimeLeft(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return `${days} 大太阳天, ${hours} 小时, ${minutes} 分钟, ${seconds} 秒`;
  }

  const countdownContainerStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#89cff0',  // Vivid blue color
    borderRadius: '15px',
    padding: '20px 40px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    width: 'auto',  // Adjust width as needed based on content size
    minWidth: '300px',  // Minimum width for smaller content
    maxWidth: '80%',  // Limit the maximum width to avoid too wide on large screens
    overflow: 'hidden',  // Prevents content from spilling out
    textOverflow: 'ellipsis'  // Adds an ellipsis if the text overflows
  };

  const countdownTextStyle = {
    fontSize: '2em',
    color: '#ffffff',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  return (
    <div style={countdownContainerStyle}>
        <div style={countdownTextStyle}>
            {timeLeft > 0 ? formatTimeLeft(timeLeft) : "妞破壳万岁!"}
        </div>
    </div>
  );
};

export default Countdown;
