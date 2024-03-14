import styles from './style.module.css';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import ProductPricing from './ProductPricing';

export default function ProductCard({
  id,
  title,
  description,
  price,
  discountedPrice,
  image,
}) {
  return (
    <div className={styles.card}>
      <ProductImage image={image} title={title} />
      <div className={styles.details}>
        <ProductDetails title={title} description={description} />
        <ProductPricing price={price} discountedPrice={discountedPrice} />
      </div>
    </div>
  );
}
