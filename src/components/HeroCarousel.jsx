 
import { useState, useRef, useEffect } from 'react';
import '../css/HeroCarousel.css';

import heroVideo from '../assets/hero.mp4';
// import heroPoster from '../assets/hero/hero-poster.jpg';
import slide2 from '../assets/confident-woman.png';
import slide3 from '../assets/vip_car_1.png';
import slide4 from '../assets/vip_car_3.png';
import slide5 from '../assets/vip_car_4.png';

const slides = [
  {
    type: 'video',
    src: heroVideo,
    // poster: heroPoster,
  },
  {
    type: 'image',
    src: slide2,
    alt: 'VIP Cosmetics',
  },
  {
    type: 'image',
    src: slide3,
    alt: 'VIP Cosmetics',
  },
  {
    type: 'image',
    src: slide4,
    alt: 'VIP Cosmetics',
  },
  {
    type: 'image',
    src: slide5,
    alt: 'VIP Cosmetics',
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const prev = () => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero-carousel">
      <button
        className="arrow arrow-left"
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {slide.type === 'video' ? (
        <video
          ref={videoRef}
          className="hero-media"
          src={slide.src}
          poster={slide.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          className="hero-media"
          src={slide.src}
          alt={slide.alt || ''}
        />
      )}

      <button
        className="arrow arrow-right"
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}

export default HeroCarousel;
 
