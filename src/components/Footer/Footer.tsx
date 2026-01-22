import { Layout, Input, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  HeartFilled,
} from "@ant-design/icons";

import styles from "./Footer.module.scss";
import logo from '@/assets/sakthiLogo.png';

const { Footer: AntFooter } = Layout;

export default function Footer() {
  return (
    <AntFooter className={styles.footer}>
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "var(--container-width)" }}
      >
        {/* Main content */}
        <div className={styles.grid}>
          {/* About */}
          <div>
            <div className={styles.brand}>
              <img src={logo} alt="Sakthi Children's Hospital" />
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
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.list}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={styles.title}>Our Services</h3>
            <ul className={styles.list}>
              <li>General Pediatrics</li>
              <li>Newborn Care</li>
              <li>Immunization</li>
              <li>Emergency Care</li>
              <li>Growth Monitoring</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={styles.title}>Newsletter</h3>
            <p className={styles.text}>
              Subscribe for health tips and updates about child care.
            </p>

            <div className={styles.newsletter}>
              <Input placeholder="Your email" />
              <Button className={styles.primaryBtn}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
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
}
