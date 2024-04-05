import styles from './style.module.css';

export default function PrimaryButton({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
