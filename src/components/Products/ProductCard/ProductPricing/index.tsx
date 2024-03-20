import styles from './style.module.css';

export default function ProductPricing({ price, discountedPrice }) {
  const discount = discountedPrice < price;

  return (
    <div className={styles.pricing}>
      {discount ? (
        <>
          <p className={styles.discountedPrice}>
            <span className="sr-only">Discounted price is</span>
            <span>{discountedPrice} kr</span>
          </p>
          <p className={styles.originalPrice}>
            (<span className="sr-only">Original price was</span>
            <span>{price}</span>)
          </p>
        </>
      ) : (
        <p className={styles.price}>
          <span className="sr-only">Price is</span>
          <span>{price} kr</span>
        </p>
      )}
    </div>
  );
}
