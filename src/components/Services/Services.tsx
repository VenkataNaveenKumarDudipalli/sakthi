import { Row, Col, Card } from 'antd';
import {
  MedicineBoxOutlined,
  HeartOutlined,
  SafetyOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';

import styles from './Services.module.scss';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <MedicineBoxOutlined />,
    title: 'General Pediatrics',
    description:
      'Comprehensive healthcare services for infants, children, and adolescents with expert diagnosis and treatment.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Newborn Care',
    description:
      'Specialized care for newborns including health assessments, vaccinations, and developmental monitoring.',
  },
  {
    icon: <HeartOutlined />,
    title: 'Pediatric Cardiology',
    description:
      'Advanced cardiac care for children with heart conditions, from diagnosis to ongoing treatment.',
  },
  {
    icon: <ExperimentOutlined />,
    title: 'Immunization',
    description:
      'Complete vaccination programs to protect children from preventable diseases.',
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Growth Monitoring',
    description:
      'Regular health checkups and developmental milestone tracking for optimal growth.',
  },
  {
    icon: <SafetyOutlined />,
    title: 'Emergency Care',
    description:
      '24/7 pediatric emergency services with specialized staff and equipment for children.',
  },
  {
    icon: <MedicineBoxOutlined />,
    title: 'Infectious Diseases',
    description:
      'Expert treatment and management of childhood infections and communicable diseases.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Family Counseling',
    description:
      'Support and guidance for parents on child health, nutrition, and development.',
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.tag}>Our Services</span>
          <h2>Comprehensive Pediatric Care</h2>
          <p>
            From routine checkups to specialized treatments, we provide complete
            healthcare solutions for children of all ages.
          </p>
        </div>

        {/* Services Grid */}
        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className={styles.card} bordered>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services;
