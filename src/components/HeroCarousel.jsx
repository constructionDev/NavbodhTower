import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../assets/S11.png';
import img2 from '../assets/S22.png';
import img3 from '../assets/S33.png';
import img4 from '../assets/S44.png';
import img5 from '../assets/s5.png';






const images = [
img1,
img2,
img3,

img4

];

const CarouselWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
      background-repeat: no-repeat;
  background-position: center;
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1rem;
  pointer-events: auto; /* enable clicks */
  z-index: 10; /* make sure buttons are above the slides */
`;


const Button = styled(motion.button)`
  pointer-events: all;
  background: #ffffff82;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #0b1c2d;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);

  &:hover {
    background: rgba(245, 179, 1, 1);
  }
`;

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <CarouselWrapper>
      <AnimatePresence>
        <Slide
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      {/* Next/Prev Buttons */}
      <Controls>
        <Button
          onClick={prevSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous Slide"
        >
          &#10094;
        </Button>
        <Button
          onClick={nextSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next Slide"
        >
          &#10095;
        </Button>
      </Controls>
    </CarouselWrapper>
  );
};

export default HeroCarousel;



