import { useState } from 'react';
import { Rate, Modal } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';
import styles from './Testimonials.module.scss';
import type { JSX } from 'react/jsx-runtime';

type Testimonial =
  | {
      type: 'text';
      name: string;
      role: string;
      rating: number;
      text: string;
    }
  | {
      type: 'video';
      platform: 'youtube' | 'instagram' | 'facebook';
      name: string;
      role: string;
      videoId: string;
    };

const testimonials: Testimonial[] = [
  {
    type: 'text',
    name: 'Akhila 6942',
    role: 'Google Review',
    rating: 5,
    text: `I would like to express my heartfelt gratitude to the doctors and staff
    for their exceptional care during my pregnancy. The experience was truly
    comforting and professional.`,
  },
  {
    type: 'video',
    platform: 'youtube',
    name: 'Rajesh Kumar',
    role: 'Father of 1',
    videoId: 'VIDEO_ID_HERE',
  },
  {
    type: 'video',
    platform: 'instagram',
    name: 'Lakshmi Menon',
    role: 'Mother of 2',
    videoId: 'DPbT5W3ioU4',
  },
  {
    type: 'video',
    platform: 'facebook',
    name: 'Siva Rao',
    role: 'Parent',
    videoId: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=VIDEO_ID',
  },
];

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<JSX.Element | null>(null);

  const openVideo = (item: Testimonial) => {
    if (item.type !== 'video') return;

    let iframe = null;

    if (item.platform === 'youtube') {
      iframe = (
        <iframe
          src={`https://www.youtube.com/embed/${item.videoId}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      );
    }

    if (item.platform === 'instagram') {
      iframe = (
        <iframe
          src={`https://www.instagram.com/reel/${item.videoId}/embed`}
          allow="autoplay; encrypted-media"
        />
      );
    }

    if (item.platform === 'facebook') {
      iframe = <iframe src={item.videoId} allow="autoplay" />;
    }

    setActiveVideo(iframe);
    setOpen(true);
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.tag}>Testimonials</span>
          <h2>What Parents Say About Us</h2>
          <p>Real experiences from families who trust our care.</p>
        </div>

        {/* CARDS */}
        <div className={styles.cards}>
          {testimonials.map((item, index) => (
            <div className={styles.card} key={index}>
              {item.type === 'text' ? (
                <>
                  <Rate disabled defaultValue={item.rating} />
                  <div className={styles.text}>"{item.text}"</div>
                </>
              ) : (
                <div
                  className={styles.video}
                  onClick={() => openVideo(item)}
                >
                  <PlayCircleFilled />
                  <span>Watch Video</span>
                </div>
              )}

              <div className={styles.footer}>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      <Modal
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        width={800}
        destroyOnClose
      >
        <div className={styles.videoWrapper}>{activeVideo}</div>
      </Modal>
    </section>
  );
};

export default Testimonials;
