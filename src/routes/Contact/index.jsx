import styles from './style.module.css';
import ContactForm from '../../components/Forms/ContactForm';
import ContactDetails from '../../components/Contact/ContactDetails';
import ContactFaq from '../../components/Contact/ContactFaq';

export default function Contact() {
  return (
    <section>
      <div className={styles.grid}>
        <div className={styles.container}>
          <h2>Contact us</h2>
          <ContactDetails />
          <h2>Frequently asked questions</h2>
          <ContactFaq />
        </div>
        <div className={styles.container}>
          <h2>Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
