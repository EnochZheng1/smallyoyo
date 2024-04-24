import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BackgroundColorChanger from './BackgroundColorChanger';
import Title from './Title';
import RandomImagePop from './RandomImagePop';
import Countdown from './Countdown';
import BackgroundMusic from './BackgroundMusic';
import confetti from 'canvas-confetti';
import LetterComponent from './LetterComponent';

const App = () => {
  const targetDate = new Date("April 24, 2024 23:59:59");
  // const targetDate = new Date("April 22, 2024 23:54:59");
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [showLetterComponent, setShowLetterComponent] = useState(false);

  const handleCountdownEnd = () => {
    console.log('Countdown finished!');
    setCountdownFinished(true);
    setShowLetterComponent(true);
    triggerConfetti();
    triggerConfettiFireworks();
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    const confettiCanvas = document.querySelector('.confetti-canvas');
    if (confettiCanvas) {
        confettiCanvas.style.zIndex = '1000';
    }
  };

  const triggerConfettiFireworks = () => {
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const fireConfetti = () => {
        confetti(Object.assign({}, defaults, {
            particleCount: 50,
            origin: { x: Math.random(), y: Math.random() * 0.5 + 0.1 }
        }));
    };

    const interval = setInterval(fireConfetti, 200);

    return interval;
  };

  return (
    <div>
      <BackgroundColorChanger />
      {!countdownFinished && <Title />}
      {!countdownFinished && <Countdown targetDate={targetDate} onCountdownEnd={handleCountdownEnd} />}
      <RandomImagePop imageCount={65} active={!countdownFinished} />
      <BackgroundMusic src={`${process.env.PUBLIC_URL}/music/song1.mp3`} />
      {showLetterComponent && <LetterComponent countdownFinished={countdownFinished} />}
    </div>
  );
};

export default App;