import styles from './style.module.css';
import { useCartStore } from '../../../hooks/store';
import ProductDiscount from './ProductDiscount';
import ProductImage from './ProductImage';
import ProductPricing from './ProductPricing';
import ProductReviews from './ProductReviews';
import ProductRating from './ProductRating';
import PrimaryButton from '../../Buttons/PrimaryButton';

export default function ProductPage({ product }) {
  const { title, description, price, discountedPrice, image, rating, reviews } =
    product;
  const discount = discountedPrice < price;
  const addProduct = useCartStore((state) => state.addProduct);

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
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <ProductPricing price={price} discountedPrice={discountedPrice} />
        <PrimaryButton onClick={() => addProduct(product)}>
          Add to cart
        </PrimaryButton>
      </div>
      {reviews.length > 0 && <ProductReviews reviews={reviews} />}
    </div>
  );
}
