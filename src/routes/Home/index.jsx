import { useEffect, useState } from 'react';
import styles from './style.module.css';
import ProductCard from '../../components/Products/ProductCard';
import SearchForm from '../../components/Forms/SearchForm';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

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

  const filteredProducts = products.filter((product) => {
    if (query) {
      return product.title.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  });

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div className={styles.container}>Loading...</div>}
      {products.length > 0 && (
        <>
          <section>
            <div className={styles.container}>
              <SearchForm value={query} onChange={setQuery} />
            </div>
          </section>
          <section>
            <div className={styles.container}>
              <div className={styles.grid}>
                {filteredProducts.map(
                  ({
                    id,
                    title,
                    description,
                    price,
                    discountedPrice,
                    image,
                  }) => {
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
            </div>
          </section>
        </>
      )}
    </>
  );
}
