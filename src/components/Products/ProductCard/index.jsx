import { Link } from 'react-router-dom';
import styles from './style.module.css';
import ProductDiscount from './ProductDiscount';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductPricing from './ProductPricing';

export default function ProductCard({
  id,
  title,
  description,
  price,
  discountedPrice,
  image,
}) {
  const discount = discountedPrice < price;

  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`} className={styles.link}></Link>
      <div className={styles.image}>
        {discount && (
          <ProductDiscount price={price} discountedPrice={discountedPrice} />
        )}
        <ProductImage image={image} title={title} />
      </div>
      <div className={styles.details}>
        <ProductDetails title={title} description={description} />
        <ProductPricing price={price} discountedPrice={discountedPrice} />
      </div>
    </div>
  );
}
