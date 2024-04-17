import React from 'react';

const BackgroundColorChanger = ({ duration = 60 }) => {
  const morandiColors = ['#ecd5c5', '#d4a5a5', '#bb8588', '#aa7b7b', '#905d5d', '#acb6e5', '#b7b7b7', '#c9c9ff', '#89b0ae', '#555f61'];
  const colorsForAnimation = [...morandiColors, morandiColors[0]];

  const gradientKeyframes = colorsForAnimation.map((color, index, arr) => {
    const percentage = index / (arr.length - 1) * 100;
    return `${percentage}% { background-color: ${color}; }`;
  }).join('');

  const styleSheet = `
    @keyframes colorCycle {
      ${gradientKeyframes}
    }

    .color-changer {
      animation: colorCycle ${duration}s linear infinite;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <div className="color-changer" />
    </>
  );
};

export default BackgroundColorChanger;
