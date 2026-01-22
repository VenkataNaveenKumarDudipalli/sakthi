import { MenuOutlined } from '@ant-design/icons';
import styles from './Header.module.scss';
import logo from '@/assets/sakthiLogo.png';

const Header: React.FC = () => {
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

        {/* Center Menu (desktop) */}
        <nav className={styles.headerNav}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Book Appointment Button */}
        <button className={styles.appointmentBtn}>
          Book Appointment
        </button>

        {/* Hamburger (mobile) */}
        <button className={styles.hamburger}>
          <MenuOutlined />
        </button>
      </div>
    </header>
  );
};

export default Header;
