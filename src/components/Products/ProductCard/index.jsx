import { Link } from 'react-router-dom';
import styles from './style.module.css';
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
  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`} className={styles.link}></Link>
      <ProductImage image={image} title={title} />
      <div className={styles.details}>
        <ProductDetails title={title} description={description} />
        <ProductPricing price={price} discountedPrice={discountedPrice} />
      </div>
    </div>
  );
}
