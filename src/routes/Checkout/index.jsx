import styles from './style.module.css';
import { useCartStore } from '../../hooks/store';
import PaymentForm from '../../components/Forms/PaymentForm';
import ProductCart from '../../components/Products/ProductCart';

export default function Checkout() {
  const cart = useCartStore((state) => state.shoppingCart);

  return (
    <section>
      <div className={styles.grid}>
        <div className={styles.container}>
          <h2>Your information</h2>
          <PaymentForm />
        </div>
        <div className={styles.container}>
          <h2>Your shopping cart</h2>
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
      </div>
    </section>
  );
}
