import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = ({ src, autoplay = true, loop = true }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoplay); // Track whether the music is currently playing
  const [playbackFailed, setPlaybackFailed] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (autoplay) {
        audioRef.current.play().catch(error => {
          console.error("Playback was prevented by the browser!", error);
          setPlaybackFailed(true);
          setIsPlaying(false);
        });
      }
    }
  }, [autoplay]);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error trying to play audio:", error);
          setPlaybackFailed(true);
        });
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop={loop} controls style={{ display: 'none' }}>
        Your browser does not support the audio element.
      </audio>
      {playbackFailed ? (
        <button onClick={togglePlayback} style={{ position: 'absolute', top: '10px', left: '10px' }}>
          Try to Play Music
        </button>
      ) : (
        <button onClick={togglePlayback} style={{ position: 'absolute', top: '10px', left: '10px' }}>
          {isPlaying ? 'Pause' : 'Play'} Music
        </button>
      )}
    </>
  );
};

export default BackgroundMusic;
