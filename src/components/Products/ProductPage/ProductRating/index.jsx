import { Star } from 'react-feather';
import styles from './style.module.css';

export default function ProductRating({ rating }) {
  const stars = [...Array(5)];

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <span className="sr-only">
          {`Product has a ${Math.round(rating)} out of 5 rating`}
        </span>
        {stars.map((star, index) => {
          if (index < Math.round(rating)) {
            return <Star key={index} fill="#ffcc00" stroke="#ffcc00" />;
          }
          return <Star key={index} fill="#f5e0b7" stroke="#f5e0b7" />;
        })}
      </div>
      <span className={styles.rating}>({Math.round(rating)})</span>
    </div>
  );
}
