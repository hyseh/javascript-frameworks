import styles from './style.module.css';
import { useCartStore } from '../../../hooks/store';
import { MinusCircle, PlusCircle } from 'react-feather';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductPricing from './ProductPricing';

export default function ProductCart({
  product,
  title,
  description,
  price,
  discountedPrice,
  image,
  quantity,
}) {
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <div className={styles.card}>
      <ProductImage image={image} title={title} />
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <ProductDetails
            title={title}
            description={description}
            quantity={quantity}
          />
          <ProductPricing
            price={price}
            discountedPrice={discountedPrice}
            quantity={quantity}
          />
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.removeButton}
            onClick={() => removeProduct(product)}
          >
            <span className="sr-only">Decrease quantity</span>
            <MinusCircle />
          </button>
          <button
            className={styles.addButton}
            onClick={() => addProduct(product)}
          >
            <span className="sr-only">Increase quantity</span>
            <PlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
