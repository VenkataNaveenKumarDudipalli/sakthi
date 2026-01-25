import { Card, Rate, Avatar, Modal } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import { useState } from 'react';
import styles from './Testimonials.module.scss';

type Testimonial =
  | {
      type: 'text';
      name: string;
      role: string;
      image: string;
      text: string;
      rating: number;
    }
  | {
      type: 'video';
      platform: 'instagram' | 'youtube' | 'facebook';
      name: string;
      role: string;
      videoUrl: string;
    };

const testimonials: Testimonial[] = [
  {
    type: 'text',
    name: 'Priya Sharma',
    role: 'Mother of 2',
    image: 'https://images.unsplash.com/photo-1628320645101',
    text:
      "Sakthi Children's Hospital provided exceptional care. Doctors were patient and compassionate.",
    rating: 5,
  },
  {
    type: 'video',
    platform: 'instagram',
    name: 'Lakshmi Menon',
    role: 'Mother of 2',
    videoUrl:
      'https://www.instagram.com/reel/DPbT5W3ioU4/?igsh=NXRhMHZnZG0zcnkw',
  },
  {
    type: 'video',
    platform: 'youtube',
    name: 'Rajesh Kumar',
    role: 'Father of 1',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  },
  {
    type: 'text',
    name: 'Anita Verma',
    role: 'Mother of 1',
    image: 'https://images.unsplash.com/photo-1580489944761',
    text:
      'Very clean hospital and friendly doctors. My child felt comfortable.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const openVideo = (url: string, platform: string) => {
    if (platform === 'instagram' || platform === 'facebook') {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    setVideoUrl(url);
    setOpen(true);
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.tag}>Testimonials</span>
          <h2>What Parents Say About Us</h2>
          <p>Swipe to see more real experiences</p>
        </div>

        {/* SCROLL CONTAINER */}
        <div className={styles.scroller}>
          {testimonials.map((item, index) => (
            <div className={styles.cardWrapper} key={index}>
              {item.type === 'text' ? (
                <Card className={styles.card}>
                  <Rate disabled defaultValue={item.rating} />
                  <p className={styles.text}>"{item.text}"</p>

                  <div className={styles.author}>
                    <Avatar src={item.image} size={48} />
                    <div>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.role}>{item.role}</div>
                    </div>
                  </div>
                </Card>
              ) : (
                <div
                  className={styles.videoCard}
                  onClick={() =>
                    openVideo(item.videoUrl, item.platform)
                  }
                >
                  <PlayCircleFilled className={styles.playIcon} />
                  <div className={styles.videoInfo}>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                    <span className={styles.watch}>Watch Video</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* VIDEO MODAL */}
        <Modal
          open={open}
          footer={null}
          onCancel={() => setOpen(false)}
          width={800}
          destroyOnClose
        >
          {videoUrl && (
            <iframe
              src={videoUrl}
              width="100%"
              height="480"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Testimonials;
