import styles from './style.module.css';
import CartButton from '../../Buttons/CartButton';
import ProductDiscount from './ProductDiscount';
import ProductImage from './ProductImage';
import ProductPricing from './ProductPricing';
import ProductReviews from './ProductReviews';
import ProductRating from './ProductRating';

export default function ProductPage({ product }) {
  const { title, description, price, discountedPrice, image, rating, reviews } =
    product;
  const discount = discountedPrice < price;

  return (
    <div className={styles.grid}>
      <div className={styles.image}>
        {discount && (
          <ProductDiscount price={price} discountedPrice={discountedPrice} />
        )}
        <ProductImage image={image} title={title} />
      </div>
      <div className={styles.details}>
        <ProductRating rating={rating} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ProductPricing price={price} discountedPrice={discountedPrice} />
      </div>
      {reviews.length > 0 && <ProductReviews reviews={reviews} />}
    </div>
  );
}
