import { WhatsAppOutlined } from '@ant-design/icons';
import styles from './WhatsappFloat.module.scss';
const WHATSAPP_NUMBER = '919441125999'; // no +, no spaces
const MESSAGE = 'Hello Sakthi Children’s Hospital, I would like to know more.';

const WhatsAppFloat: React.FC = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppOutlined />
    </a>
  );
};

export default WhatsAppFloat;
