import styles from './style.module.css';

export default function ContactFaq() {
  return (
    <div className={styles.container}>
      <hr />
      <p className={styles.paragraph}>
        <span className="sr-only">Question:</span>
        <span className={styles.question}>Where is my order?</span>
        <span className="sr-only">Answer</span>
        <span className={styles.answer}>
          Most likely on its way to your address.
        </span>
      </p>
      <hr />
      <p className={styles.paragraph}>
        <span className="sr-only">Question:</span>
        <span className={styles.question}>How can i cancel my order?</span>
        <span className="sr-only">Answer</span>
        <span className={styles.answer}>
          Send us a ticket and we'll comeback to you as soon as possible.
        </span>
      </p>
      <hr />
      <p className={styles.paragraph}>
        <span className="sr-only">Question:</span>
        <span className={styles.question}>How can i send a complaint?</span>
        <span className="sr-only">Answer</span>
        <span className={styles.answer}>
          You can send a complaint via our email or the contact form.
        </span>
      </p>
      <hr />
    </div>
  );
}
