import styles from './style.module.css';
import { ShoppingCart } from 'react-feather';

export default function CartButton({ isActive, setIsActive }) {
  return (
    <>
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
    </>
  );
}
