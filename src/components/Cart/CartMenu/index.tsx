import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { useCartStore } from '../../../hooks/store';
import { X } from 'react-feather';
import ProductCart from '../../Products/ProductCart';

export default function CartMenu({ setIsActive }) {
  const cart = useCartStore((state) => state.shoppingCart);
  const cartPricing = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <div
        className={styles.backdrop}
        onClick={() => {
          setIsActive(false);
        }}
      ></div>
      <div className={styles.menu}>
        <div className={styles.header}>
          <p className={styles.heading}>Your shopping cart</p>
          <button
            className={styles.closeButton}
            onClick={() => {
              setIsActive(false);
            }}
          >
            <span className="sr-only">Close cart menu</span>
            <X />
          </button>
        </div>
        <div className={styles.products}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cart.map((product) => {
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
            })
          )}
        </div>
        <div className={styles.details}>
          <hr />
          <p className={styles.pricing}>
            <span>Total price:</span>
            <span>${cartPricing}</span>
          </p>
          <Link
            to="/cart"
            className={styles.checkout}
            onClick={() => {
              setIsActive(false);
            }}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
