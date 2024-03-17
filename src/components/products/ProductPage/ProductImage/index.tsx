import styles from './style.module.css';

export default function ProductImage({ image, title }) {
  return (
    <div className={styles.image}>
      <img src={image.url} alt={image.alt || `Image of ${title}`} />
    </div>
  );
}
