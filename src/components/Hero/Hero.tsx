import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import neonatalCare from '@/assets/hero/expertCare.jpeg';
import doctor from '@/assets/hero/doctor.jpeg';

const slides = [
  { image: doctor },
  { image: neonatalCare },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Optional auto play
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  // Mobile swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide(); // swipe left
    if (diff < -50) prevSlide(); // swipe right

    touchStartX.current = null;
  };

  return (
    <section
    id='home'
      className={styles.hero}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Navigation Arrows */}
      <button className={styles.prev} onClick={prevSlide} aria-label="Previous slide">
        <ArrowLeftOutlined />
      </button>

      <button className={styles.next} onClick={nextSlide} aria-label="Next slide">
        <ArrowRightOutlined />
      </button>
    </section>
  );
};

export default Hero;
