import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './Header.module.scss';
import logo from '@/assets/sakthiLogo.png';
import React, { useState } from 'react';
import AppointmentModal from '../Modals/AppointmentModal';
import { Link } from "react-router-dom";


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
           <Link to="/#home" onClick={closeMenu}>Home</Link>
<Link to="/#services" onClick={closeMenu}>Services</Link>
<Link to="/#about" onClick={closeMenu}>About</Link>
<Link to="/#testimonials" onClick={closeMenu}>Testimonials</Link>
<Link to="/#contact" onClick={closeMenu}>Contact</Link>
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
        <Link to="/#home" onClick={closeMenu}>Home</Link>
<Link to="/#services" onClick={closeMenu}>Services</Link>
<Link to="/#about" onClick={closeMenu}>About</Link>
<Link to="/#testimonials" onClick={closeMenu}>Testimonials</Link>
<Link to="/#contact" onClick={closeMenu}>Contact</Link>


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
