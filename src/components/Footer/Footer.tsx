import { Layout, Input, Button } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  HeartFilled,
} from '@ant-design/icons';

import styles from './Footer.module.scss';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.grid}>
          {/* About */}
          <div>
            <div className={styles.brand}>
              {/* <img src={logo} alt="Sakthi Children's Hospital" /> */}
              <div>
                <div className={styles.brandName}>SAKTHI</div>
                <div className={styles.brandSub}>CHILDREN'S HOSPITAL</div>
              </div>
            </div>

            <p className={styles.text}>
              Healing with Heart, Caring with Strength. Dedicated to providing
              exceptional pediatric healthcare services.
            </p>

            <div className={styles.socials}>
              <a href="#"><FacebookOutlined /></a>
              <a href="#"><TwitterOutlined /></a>
              <a href="#"><InstagramOutlined /></a>
              <a href="#"><LinkedinOutlined /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>Our Services</h3>
            <ul>
              <li>General Pediatrics</li>
              <li>Newborn Care</li>
              <li>Immunization</li>
              <li>Emergency Care</li>
              <li>Growth Monitoring</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3>Newsletter</h3>
            <p className={styles.text}>
              Subscribe for health tips and updates about child care.
            </p>

            <div className={styles.newsletter}>
              <Input placeholder="Your email" />
              <Button type="primary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p>© 2026 Sakthi Children's Hospital. All rights reserved.</p>

          <div className={styles.madeWith}>
            <span>Made with</span>
            <HeartFilled />
            <span>for children's health</span>
          </div>

          <div className={styles.links}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
