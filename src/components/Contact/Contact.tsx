import { Row, Col } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import styles from './Contact.module.scss';
import hospitalImg from '@/assets/contact/hospital.png'; // adjust path

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>Get In Touch</span>
          <h2>Contact Us</h2>
          <p>
            We’re always here to support your child’s health and well-being.
          </p>
        </div>

        <Row gutter={[ 80,40]} align="middle">
          {/* Image */}
          <Col xs={24} md={12}>
            <div className={styles.imageWrapper}>
              <img
                src={hospitalImg}
                alt="Sakthi Children's Hospital"
              />
            </div>
          </Col>

          {/* Info */}
          <Col xs={24} md={12}>
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <EnvironmentOutlined />
                <div>
                  <h4>Visit Us</h4>
                  <p>
                    Sakthi Children’s Hospital<br />
                    Kandukur, Prakasam District<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <PhoneOutlined />
                <div>
                  <h4>Call Us</h4>
                  <p>
                    +91 94411 25999<br />
                    24/7 Emergency Services
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <MailOutlined />
                <div>
                  <h4>Email Us</h4>
                  <p>
                    info@sakthichildrenshospital.com
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <ClockCircleOutlined />
                <div>
                  <h4>Working Hours</h4>
                  <p>
                    Mon – Sat: 8:00 AM – 8:00 PM<br />
                    Sunday: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
