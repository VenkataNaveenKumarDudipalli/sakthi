import { Row, Col, Card, Rate, Avatar } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

import styles from './Testimonials.module.scss';

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Mother of 2',
    image:
      'https://images.unsplash.com/photo-1628320645101-5a41b1f88c0b?fit=max&w=1080&q=80',
    text:
      "Sakthi Children's Hospital provided exceptional care for my son. The doctors are patient, caring, and truly understand children's needs.",
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Father of 1',
    image:
      'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?fit=max&w=1080&q=80',
    text:
      "The emergency care team saved my daughter's life. I am forever grateful for their quick response and professional expertise.",
    rating: 5,
  },
  {
    name: 'Lakshmi Menon',
    role: 'Mother of 3',
    image:
      'https://images.unsplash.com/photo-1758691462164-100b5e356169?fit=max&w=1080&q=80',
    text:
      'A wonderful hospital with a child-friendly atmosphere. My children actually feel comfortable visiting their doctor here!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.tag}>Testimonials</span>
          <h2>What Parents Say About Us</h2>
          <p>
            Hear from families who have experienced our dedicated pediatric care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <Row gutter={[32, 32]}>
          {testimonials.map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className={styles.card}>
                {/* Quote Icon */}
                <MessageOutlined className={styles.quoteIcon} />

                {/* Rating */}
                <Rate disabled defaultValue={item.rating} />

                {/* Text */}
                <p className={styles.text}>"{item.text}"</p>

                {/* Author */}
                <div className={styles.author}>
                  <Avatar src={item.image} size={48} />
                  <div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.role}>{item.role}</div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Testimonials;
