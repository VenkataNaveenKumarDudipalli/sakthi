import { Row, Col } from 'antd';
import {
  MedicineBoxOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

import styles from './Services.module.scss';

type Service = {
  title: string;
  image: string;
  location: string;
};

const services: Service[] = [
  {
    title: 'General Pediatrics',
    image: 'https://images.unsplash.com/photo-1600959907703-125ba1374a12',
    location: 'Children Care',
  },
  {
    title: 'Newborn Care',
    image: 'https://images.unsplash.com/photo-1576765607924-3f7b8410c3b6',
    location: 'NICU Support',
  },
  {
    title: 'Child Nutrition',
    image: 'https://images.unsplash.com/photo-1606813909027-0c5c1a1db39d',
    location: 'Diet & Growth',
  },
  {
    title: 'Immunization',
    image: 'https://images.unsplash.com/photo-1580281657527-47f249e8f8c8',
    location: 'Vaccination',
  },

  /* 🔥 NEW SERVICES */

  {
    title: 'Emergency Care',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa',
    location: '24/7 Support',
  },
  {
    title: 'Growth Monitoring',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    location: 'Development',
  },
  {
    title: 'Infectious Diseases',
    image: 'https://images.unsplash.com/photo-1584036561584-b03c19da874c',
    location: 'Special Care',
  },
  {
    title: 'Family Counseling',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    location: 'Parent Support',
  },
];


const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Services</h2>
          <div className={styles.underline} />
        </div>

        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <div className={styles.card}>
                {/* IMAGE */}
                <div className={styles.imageWrapper}>
                  <img src={service.image} alt={service.title} />
                </div>

                {/* CONTENT */}
                <div className={styles.content}>
                  <h3>{service.title}</h3>
                  <div className={styles.divider} />

                  <div className={styles.footer}>
                    <div className={styles.meta}>
                      <MedicineBoxOutlined />
                      <span>{service.location}</span>
                    </div>

                    <div className={styles.call}>
                      <PhoneOutlined />
                      <span>Call Us</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services;
