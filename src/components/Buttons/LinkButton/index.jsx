import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function LinkButton({ children, to, onClick }) {
  return (
    <Link to={to} className={styles.button} onClick={onClick}>
      {children}
    </Link>
  );
}
