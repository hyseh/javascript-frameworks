import styles from './style.module.css';
import { Search } from 'react-feather';

export default function Input({ value, onChange }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Search stroke="#8e8e8e" />
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
