import styles from './style.module.css';
import { useCartStore } from '../../../hooks/store';
import { ShoppingCart } from 'react-feather';

export default function CartButton({ isActive, setIsActive }) {
  const cart = useCartStore((state) => state.shoppingCart);
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setIsActive(!isActive);
        console.log('clicked');
      }}
    >
      {cartQuantity > 0 && (
        <div className={styles.quantity}>
          <span>{cartQuantity}</span>
        </div>
      )}
      <button
        className={styles.button}
        onClick={() => {
          setIsActive(!isActive);
          console.log('clicked');
        }}
      >
        <span className="sr-only">Open cart menu</span>
        <ShoppingCart />
      </button>
    </div>
  );
}
