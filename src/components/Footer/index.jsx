import styles from './style.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <a href="/">Footer</a>
        </div>
      </div>
    </footer>
  );
}
