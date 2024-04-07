import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { useCartStore } from '../../hooks/store';
import PaymentForm from '../../components/Forms/PaymentForm';
import CartOverview from '../../components/Cart/CartOverview';

export default function Checkout() {
  const cart = useCartStore((state) => state.shoppingCart);

  return (
    <section>
      {cart.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.container}>
            <h2>Your order could not be completed</h2>
            <p>You do not have any products in your shopping cart.</p>
            <Link
              to="/"
              className={styles.startButton}
              onClick={() => {
                setIsActive(false);
              }}
            >
              Start Shopping
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            <div className={styles.container}>
              <h2>Your information</h2>
              <PaymentForm />
            </div>
            <div className={styles.container}>
              <h2>Your shopping cart</h2>
              <CartOverview />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
