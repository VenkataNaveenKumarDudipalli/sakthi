import { useState } from 'react';
import styles from './Header.module.scss';
import logo from "../../assets/sakthiLogo.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logo} alt="Sakthi Hospital" />
          <div className={styles.logoText}>
          <div className="text-xl" style={{ color: '#3d9d94' }}>SAKTHI</div>
          <div className="text-xs text-gray-600">CHILDRENS HOSPITAL</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${open ? styles.active : ''}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="tel:+919999999999" className={styles.callBtn}>
            📞 Call Now
          </a>

          <button
            className={styles.menuToggle}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
