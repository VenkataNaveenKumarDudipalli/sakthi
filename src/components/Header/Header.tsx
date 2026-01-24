import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './Header.module.scss';
import logo from '@/assets/sakthiLogo.png';
import React, { useState } from 'react';
import AppointmentModal from '../Modals/AppointmentModal';

const Header: React.FC = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logo} alt="Sakthi Children's Hospital" />
          <div className={styles.logoText}>
            <div className={styles.title}>SAKTHI</div>
            <div className={styles.subtitle}>CHILDREN’S HOSPITAL</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className={styles.headerNav}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Book Appointment */}
        <button
          className={styles.appointmentBtn}
          onClick={() => setAppointmentOpen(true)}
        >
          Book Appointment
        </button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <button
            className={styles.mobileAppointment}
            onClick={() => {
              closeMenu();
              setAppointmentOpen(true);
            }}
          >
            Book Appointment
          </button>
        </div>
      )}

      {/* Appointment Modal */}
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </header>
  );
};

export default Header;
