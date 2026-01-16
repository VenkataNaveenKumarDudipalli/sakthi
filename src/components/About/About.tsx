import { Row, Col, Button } from 'antd';
import { CheckCircleOutlined, TrophyOutlined } from '@ant-design/icons';

import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <Row gutter={[48, 48]} align="middle">
          {/* Left Image */}
          <Col xs={24} md={12}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1758691462284-9eeec33fb0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Pediatric Healthcare"
                className={styles.image}
              />

              {/* Award Badge */}
              <div className={styles.badge}>
                <div className={styles.badgeIcon}>
                  <TrophyOutlined />
                </div>
                <div>
                  <div className={styles.badgeValue}>20+</div>
                  <div className={styles.badgeText}>Years Excellence</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Content */}
          <Col xs={24} md={12}>
            <div className={styles.content}>
              <span className={styles.tag}>About Us</span>

              <h2>Trusted Pediatric Healthcare Provider</h2>

              <p>
                Sakthi Children's Hospital has been a beacon of hope and healing
                for children for over 20 years. Our dedicated team of pediatric
                specialists provides compassionate, world-class medical care.
              </p>

              <p>
                We combine cutting-edge medical technology with a child-friendly
                environment to ensure the best possible care.
              </p>

              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircleOutlined />
                  <div>
                    <h4>Child-Friendly Facilities</h4>
                    <p>Warm, welcoming environment designed for children's comfort</p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <CheckCircleOutlined />
                  <div>
                    <h4>Expert Pediatric Team</h4>
                    <p>Highly qualified specialists dedicated to children's health</p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <CheckCircleOutlined />
                  <div>
                    <h4>Advanced Medical Care</h4>
                    <p>Latest technology and treatment methods for children</p>
                  </div>
                </div>
              </div>

              <Button type="primary" size="large" className={styles.cta}>
                Learn More About Us
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
