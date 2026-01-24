import styles from '../Legal.module.scss';

const TermsAndConditions = () => {
  return (
    <section className={styles.legal}>
      <div className={styles.container}>
        <h1>Terms & Conditions</h1>
        <p className={styles.updated}>Last updated: January 2026</p>

        <p>
          By accessing and using the Sakthi Children’s Hospital website, you
          agree to comply with the following terms and conditions.
        </p>

        <h2>Medical Disclaimer</h2>
        <p>
          Information provided on this website is for general informational
          purposes only and does not replace professional medical advice,
          diagnosis, or treatment.
        </p>

        <h2>Appointments</h2>
        <p>
          Appointment requests submitted through the website do not guarantee a
          confirmed appointment. Our team will contact you for confirmation.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, images, logos, and text on this website are the property
          of Sakthi Children’s Hospital and may not be reproduced without
          permission.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Sakthi Children’s Hospital is not liable for any damages arising from
          the use of this website or reliance on its content.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use
          of the website constitutes acceptance of updated terms.
        </p>

        <h2>Contact Information</h2>
        <p>
          Sakthi Children’s Hospital<br />
          Kandukur, Prakasam District, Andhra Pradesh<br />
          Phone: +91 94411 25999
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
