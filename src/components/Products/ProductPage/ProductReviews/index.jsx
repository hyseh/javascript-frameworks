import styles from './style.module.css';
import ProductRating from '../ProductRating';

export default function ProductReviews({ reviews }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Reviews</h3>
      {reviews.map(({ id, description, rating, username }) => {
        return (
          <div key={id} className={styles.review}>
            <ProductRating rating={rating} />
            <p className={styles.details}>
              {`"${description}"`}
              <span className={styles.username}>{` - ${username}`}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
