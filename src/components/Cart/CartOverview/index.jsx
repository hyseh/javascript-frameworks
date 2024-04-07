import styles from './style.module.css';
import { useCartStore } from '../../../hooks/store';
import ProductCart from '../../Products/ProductCart';

export default function CartOverview() {
  const cart = useCartStore((state) => state.shoppingCart);
  const cartPricing = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <div>
        {cart.map((product) => {
          const {
            id,
            title,
            description,
            price,
            discountedPrice,
            image,
            quantity,
          } = product;
          return (
            <ProductCart
              key={id}
              product={product}
              title={title}
              description={description}
              price={price}
              discountedPrice={discountedPrice}
              image={image}
              quantity={quantity}
            />
          );
        })}
      </div>
      <div className={styles.details}>
        <hr />
        <p className={styles.pricing}>
          <span>Total price:</span>
          <span>${cartPricing}</span>
        </p>
      </div>
    </>
  );
}
