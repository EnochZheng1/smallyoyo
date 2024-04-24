import React, { useState, useEffect } from 'react';

const RandomImagePop = ({ imageCount, active }) => {
  const [images, setImages] = useState([]);
  const [availableIndices, setAvailableIndices] = useState([...Array(imageCount).keys()].map(x => x + 1));

  const baseTime = 1000;

  useEffect(() => {
    if (!active) {
      return;
    }
    const addImage = () => {
      if (availableIndices.length === 0) {
        // Reset the available indices when all have been used
        setAvailableIndices([...Array(imageCount).keys()].map(x => x + 1));
      }
      if (availableIndices.length > 0) {
        // Select a random index from the available indices
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const imageNumber = availableIndices[randomIndex];

        // Remove the selected index from the available pool
        const newAvailableIndices = availableIndices.filter((_, i) => i !== randomIndex);
        setAvailableIndices(newAvailableIndices);

        const randomImagePath = `${process.env.PUBLIC_URL}/photos/image${imageNumber}.jpg`;
        //console.log(randomImagePath);
        const maxWidth = Math.min(window.innerWidth * 0.5, 400);
        const maxHeight = maxWidth;
        const left = Math.random() * (window.innerWidth - maxWidth);
        const top = Math.random() * (window.innerHeight - maxHeight);

        const newPosition = {
          position: 'absolute',
          left: `${left}px`,
          top: `${top}px`,
          opacity: 0,
          transition: 'opacity 1s ease-in-out',
          width: '20%',
          maxWidth: '200px',
          height: 'auto',
          borderRadius: '20px',
          zIndex: 1000
        };

        const newImage = {
          id: Date.now(),
          src: randomImagePath,
          style: newPosition
        };

        setImages(prevImages => [...prevImages, newImage]);

        // Trigger fade in
        setTimeout(() => {
          setImages(prevImages => prevImages.map(img =>
            img.id === newImage.id ? { ...img, style: { ...img.style, opacity: 1 } } : img
          ));
        }, baseTime * 0.05);

        // Schedule fade out to start before the image is removed
        setTimeout(() => {
          setImages(prevImages => prevImages.map(img =>
            img.id === newImage.id ? { ...img, style: { ...img.style, opacity: 0 } } : img
          ));
          setTimeout(() => {
            setImages(prevImages => prevImages.filter(img => img.id !== newImage.id));
          }, baseTime); // Fade-out transition
        }, baseTime * 3); // Visibility duration
      }
    };

    const interval = setInterval(addImage, baseTime * 4);
    return () => clearInterval(interval);
  }, [imageCount, availableIndices, active]);
  const handleImageClick = (src) => {
    window.open(src, '_blank');
  };
  return (
    <>
      {images.map(image => (
        <img key={image.id} src={image.src} alt="Random Pop" style={image.style} onClick={() => handleImageClick(image.src)} />
      ))}
    </>
  );
};

export default RandomImagePop;