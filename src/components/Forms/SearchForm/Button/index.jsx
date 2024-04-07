import styles from './style.module.css';

export default function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className="sr-only">Search</span>
      {children}
    </button>
  );
}
