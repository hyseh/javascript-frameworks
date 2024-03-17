import styles from './style.module.css';

export default function ProductDetails({ title, description }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
