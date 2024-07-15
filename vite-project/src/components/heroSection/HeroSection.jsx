import React, { useState, useEffect } from 'react';

function HeroSection() {
  const imgUrls = [
    'https://firebasestorage.googleapis.com/v0/b/shopapp-b9f4e.appspot.com/o/116592A01%201.png?alt=media&token=eb06a8ac-b474-4a87-be21-f2863887c02d',
    'https://firebasestorage.googleapis.com/v0/b/shopapp-b9f4e.appspot.com/o/Image-2.png?alt=media&token=7ae1d62b-7c67-440a-862f-a16c585a9f15'
  ];

  const containerStyle = {
  
  };

  const imgStyle = {
    width: '100%',
    height: '450px',
    /* Add more img styles as needed */
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imgUrls.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [imgUrls.length]);

  return (
    <div style={containerStyle}>
      <img
        src={imgUrls[currentSlide]}
        style={imgStyle}
        alt={`Slide ${currentSlide + 1}`}
      />
    </div>
  );
}

export default HeroSection;
