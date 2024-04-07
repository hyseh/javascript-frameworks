import styles from './style.module.css';

export default function ContactDetails() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Details:</h3>
        <p className={styles.paragraph}>
          <span>Email: contact@mail.com</span>
          <span>Phone: +55 88 85 30 03</span>
        </p>
      </div>
      <div>
        <h3 className={styles.heading}>Address:</h3>
        <p className={styles.paragraph}>
          <span>Bredalsmarken 15, 5006 Bergen</span>
        </p>
      </div>
    </div>
  );
}
