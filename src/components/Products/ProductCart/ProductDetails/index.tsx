import styles from './style.module.css';

export default function ProductDetails({ title, description, quantity }) {
  return (
    <div>
      <h2 className={styles.title}>{`${quantity} x ${title}`}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
