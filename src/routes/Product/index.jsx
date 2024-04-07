import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.css';
import ProductPage from '../../components/Products/ProductPage';

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setProduct(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occured while fetching data');
        setLoading(false);
      }
    }

    getData();
  }, [id]);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {product && (
        <section>
          <ProductPage product={product} />
        </section>
      )}
    </>
  );
}
