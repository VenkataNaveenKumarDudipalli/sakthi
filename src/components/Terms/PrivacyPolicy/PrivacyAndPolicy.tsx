import styles from '../Legal.module.scss';

const PrivacyPolicy = () => {

  return (
    <section className={styles.legal}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: January 2026</p>

        <p>
          Sakthi Children’s Hospital respects your privacy and is committed to
          protecting the personal information of our patients, parents, and
          website visitors.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Personal details such as name, phone number, and email address</li>
          <li>Medical enquiry details submitted through contact forms</li>
          <li>Basic usage data for website improvement</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to enquiries and appointment requests</li>
          <li>To provide healthcare-related services</li>
          <li>To improve our website and patient experience</li>
        </ul>

        <h2>Data Protection</h2>
        <p>
          We implement appropriate security measures to protect your personal
          data. Your information is never sold or shared with third parties
          except where required by law.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our website may contain links to third-party services such as Google
          Maps or WhatsApp. We are not responsible for their privacy practices.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
          <br />
          <strong>Phone:</strong> +91 94411 25999
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
