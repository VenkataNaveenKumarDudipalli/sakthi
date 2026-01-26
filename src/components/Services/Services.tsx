import { Row, Col } from 'antd';
import {
  MedicineBoxOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

import styles from './Services.module.scss';
import immunization from '@/assets/services/immunization.jpg';
import childNutrition from '@/assets/services/childnutrition.jpg';
import general from '@/assets/services/general.jpeg';
import newBorn from '@/assets/services/newborn.jpg';
import emergency from '@/assets/services/emergency.jpeg';
import family from '@/assets/services/family.jpg';
import growth from '@/assets/services/growth.jpeg';
import infec from '@/assets/services/infec.jpeg';





type Service = {
  title: string;
  image: string;
  location: string;
};

const services: Service[] = [
  {
    title: 'General Pediatrics',
    image: general,
    location: 'Children Care',
  },
  {
    title: 'Newborn Care',
    image: newBorn,
    location: 'NICU Support',
  },
  {
    title: 'Child Nutrition',
    image: childNutrition,
    location: 'Diet & Growth',
  },
  {
    title: 'Immunization',
    image: immunization,
    location: 'Vaccination',
  },

  /* 🔥 NEW SERVICES */

  {
    title: 'Emergency Care',
    image: emergency,
    location: '24/7 Support',
  },
  {
    title: 'Growth Monitoring',
    image: growth,
    location: 'Development',
  },
  {
    title: 'Infectious Diseases',
    image: infec,
    location: 'Special Care',
  },
  {
    title: 'Family Counseling',
    image: family,
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
