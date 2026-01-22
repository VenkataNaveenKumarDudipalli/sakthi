import { useEffect, useState } from 'react';
import styles from './Hero.module.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1600959907703-125ba1374a12',
    title: 'Care That Comes with Expertise,',
    subtitle: 'Doctors Who Truly Listen',
    description:
      'Our team of expert specialists in maternity, women’s health, child care, and diagnostics combine medical excellence with heartfelt compassion.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1576765607924-3f7b8410c3b6',
    title: 'Expert Care for Your',
    subtitle: 'Little Ones',
    description:
      'Comprehensive pediatric healthcare services dedicated to keeping children healthy, happy, and thriving.',
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className={styles.hero} id="home">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${
            i === index ? styles.active : ''
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay} />

          <div className={styles.content}>
            <h1>
              {slide.title}
              <br />
              <span>{slide.subtitle}</span>
            </h1>

            <p>{slide.description}</p>

            <div className={styles.buttons}>
              <button className={styles.primary}>
                Make Appointment
              </button>
              <button className={styles.secondary}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className={styles.prev} onClick={prevSlide}>
        <ArrowLeftOutlined />
      </button>
      <button className={styles.next} onClick={nextSlide}>
        <ArrowRightOutlined />
      </button>
    </section>
  );
};

export default Hero;
