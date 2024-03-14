import { useEffect, useState } from 'react';
import styles from './style.module.css';
import ProductCard from '../../components/Cards/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('https://v2.api.noroff.dev/online-shop');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();

        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occured while fetching data');
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {products && (
        <section>
          <div className={styles.grid}>
            {products.map(
              ({ id, title, description, price, discountedPrice, image }) => {
                return (
                  <ProductCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    discountedPrice={discountedPrice}
                    image={image}
                  />
                );
              }
            )}
          </div>
        </section>
      )}
    </>
  );
}
