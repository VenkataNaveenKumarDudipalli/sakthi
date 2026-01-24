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
                  <div className={styles.badgeText}>Years of Excellence</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Content */}
          <Col xs={24} md={12}>
            <div className={styles.content}>
              <span className={styles.tag}>About Us</span>
              <p>
                Sakthi Children's Hospital has been a beacon of hope and healing
                for children for over 20 years. Our dedicated team of pediatric
                specialists provides compassionate, world-class medical care.
              </p>

              {/* Features */}
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircleOutlined />
                  <div>
                    <h4>Child-Friendly Facilities</h4>
                    <p>
                      A warm, welcoming environment designed for children’s
                      comfort and care.
                    </p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <CheckCircleOutlined />
                  <div>
                    <h4>Expert Pediatric Team</h4>
                    <p>
                      Highly qualified specialists dedicated to children’s
                      health and well-being.
                    </p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <CheckCircleOutlined />
                  <div>
                    <h4>Advanced Medical Care</h4>
                    <p>
                      Modern technology and evidence-based treatments for
                      children.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission & Motive */}
              <div className={styles.missionMotive}>
                <div className={styles.mission}>
                  <h3>Our Mission</h3>
                  <p>
                    To deliver compassionate, high-quality pediatric healthcare
                    that supports every child’s growth, health, and happiness
                    in a safe and nurturing environment.
                  </p>
                </div>

                <div className={styles.motive}>
                  <h3>Our Motive</h3>
                  <p>
                    Guided by empathy and trust, our motive is to continuously
                    improve child healthcare through innovation, dedication,
                    and family-centered care.
                  </p>
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
