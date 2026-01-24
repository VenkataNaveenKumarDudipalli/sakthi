import { useState } from 'react';
import {
  HeartOutlined,
  SafetyOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';

import styles from './LearnMore.module.scss';
import AppointmentModal from '../../Modals/AppointmentModal';

const LearnMore = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.learnMore}>
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <span className={styles.tag}>About Us</span>
          <h1>About Sakthi Children’s Hospital</h1>
          <p>
            Compassionate care, advanced medicine, and a child-friendly
            environment — all under one roof.
          </p>
        </header>

        {/* Mission / Vision */}
        <div className={styles.missionGrid}>
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>
              To provide high-quality pediatric healthcare with compassion,
              safety, and excellence for every child.
            </p>
          </div>

          <div className={`${styles.card} ${styles.secondary}`}>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted children’s hospital, empowering healthier
              futures through innovation and care.
            </p>
          </div>
        </div>

        {/* Why Trust Us */}
        <section className={styles.trust}>
          <h2>Why Parents Trust Us</h2>

          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <HeartOutlined />
              <h4>Child-Centric Care</h4>
              <p>Warm, friendly environment designed for children</p>
            </div>

            <div className={styles.trustCard}>
              <MedicineBoxOutlined />
              <h4>Expert Pediatricians</h4>
              <p>Highly experienced doctors and nursing staff</p>
            </div>

            <div className={styles.trustCard}>
              <SafetyOutlined />
              <h4>24/7 Emergency</h4>
              <p>Always ready when your child needs us most</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className={styles.cta}>
          <h2>Your Child’s Health Is Our Priority</h2>
          <p>Book an appointment today and experience trusted pediatric care.</p>

          <button onClick={() => setOpen(true)}>
            Book Appointment
          </button>
        </div>

        <AppointmentModal open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
};

export default LearnMore;
