import styles from './style.module.css';

export default function ProductDiscount({ price, discountedPrice }) {
  const discount = Math.round(((price - discountedPrice) / price) * 100);

  return (
    <div className={styles.discount}>
      <span>Spar {discount}%</span>
    </div>
  );
}
