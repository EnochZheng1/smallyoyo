import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = ({ src, loop = true }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);  // State to manage play/pause

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error('Error playing audio:', error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} loop={loop} style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay} style={buttonStyle}>
        {isPlaying ? '不要放小歌' : '放小歌！！'}
      </button>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px 10px',
  zIndex: 1000,
  position: 'relative'
};

export default BackgroundMusic;
