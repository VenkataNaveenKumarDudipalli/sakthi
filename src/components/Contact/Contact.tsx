import { Row, Col, Form, Input, Button } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.tag}>Get In Touch</span>
          <h2>Contact Us</h2>
          <p>We're here for your child's health. Reach out to us anytime.</p>
        </div>

        <Row gutter={[48, 48]}>
          {/* Contact Form */}
          <Col xs={24} md={12}>
            <div className={styles.card}>
              <h3>Send us a message</h3>

              <Form layout="vertical">
                <Form.Item label="Parent / Guardian Name" name="name">
                  <Input placeholder="Your name" />
                </Form.Item>

                <Form.Item label="Email Address" name="email">
                  <Input placeholder="your@email.com" />
                </Form.Item>

                <Form.Item label="Phone Number" name="phone">
                  <Input placeholder="+91 00000 00000" />
                </Form.Item>

                <Form.Item label="Message" name="message">
                  <Input.TextArea rows={4} placeholder="Tell us how we can help your child..." />
                </Form.Item>

                <Button type="primary" size="large" block>
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={24} md={12}>
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <EnvironmentOutlined />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>
                    Sakthi Children's Hospital<br />
                    123 Medical Street, Chennai<br />
                    Tamil Nadu 600001, India
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <PhoneOutlined />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    +91 44 1234 5678<br />
                    +91 98765 43210<br />
                    Emergency: +91 98765 00000
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <MailOutlined />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>
                    info@sakthihospital.com<br />
                    appointments@sakthihospital.com
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>
                  <ClockCircleOutlined />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>
                    Mon - Sat: 8:00 AM - 8:00 PM<br />
                    Sunday: 9:00 AM - 5:00 PM<br />
                    24/7 Emergency Services
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
