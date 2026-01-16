import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.content}>
            <span className={styles.badge}>
              Healing with Heart, Caring with Strength
            </span>

            <h1>
              Expert Care for Your <span>Little Ones</span>
            </h1>

            <p>
              Comprehensive pediatric healthcare services dedicated to keeping
              children healthy, happy, and thriving.
            </p>

            <div className={styles.buttons}>
              <button className={styles.primary}>
                <CalendarOutlined /> Book Appointment
              </button>

              <button className={styles.outline}>
                Learn More <ArrowRightOutlined />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1758206523860-0583e7b51a5e"
              alt="Children Healthcare"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
