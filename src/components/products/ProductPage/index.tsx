import styles from './style.module.css';
import CartButton from '../../Buttons/CartButton';
import ProductDiscount from './ProductDiscount';
import ProductImage from './ProductImage';
import ProductPricing from './ProductPricing';
import ProductReviews from './ProductReviews';

export default function ProductPage({ product }) {
  const { title, description, price, discountedPrice, image, reviews } =
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
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.cart}>
          <ProductPricing price={price} discountedPrice={discountedPrice} />
          <CartButton />
        </div>
        <div>
          <ProductReviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
}
