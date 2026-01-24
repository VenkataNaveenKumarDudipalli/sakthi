import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from './TopInfoBar.module.scss';

const TopInfoBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        {/* Location */}
        <a
          href="https://share.google/3RAB4jxYofqv6UJUd"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.location}
        >
          <EnvironmentOutlined />
          <span>Kandukur, Prakasam District, Andhra Pradesh</span>
        </a>

        {/* Phone */}
        <div className={styles.phone}>
          <PhoneOutlined />
          <a href="tel:+919441125999">+91 94411 25999</a>
        </div>
      </div>
    </div>
  );
};


export default TopInfoBar;
