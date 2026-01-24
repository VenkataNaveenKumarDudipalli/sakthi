import { Modal, Form, Input, Button, DatePicker } from 'antd';
import styles from './AppointmentModal.module.scss';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={420}
      className={styles.modal}
    >
      <h3 className={styles.title}>Book an Appointment</h3>
      <p className={styles.subtitle}>
        We’ll contact you shortly to confirm
      </p>

      <Form layout="vertical">
        <Form.Item label="Parent / Guardian Name" name="name" required>
          <Input placeholder="Your name" />
        </Form.Item>

        <Form.Item label="Phone Number" name="phone" required>
          <Input placeholder="+91 XXXXX XXXXX" />
        </Form.Item>

        <Form.Item label="Preferred Date" name="date">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Message" name="message">
          <Input.TextArea
            rows={3}
            placeholder="Child age / concern (optional)"
          />
        </Form.Item>

        <Button type="primary" size="large" block >
          Submit Request
        </Button>
      </Form>
    </Modal>
  );
};

export default AppointmentModal;
