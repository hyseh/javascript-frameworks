export default function ProductImage({ image, title }) {
  return (
    <div>
      <img src={image.url} alt={image.alt || `Image of ${title}`} />
    </div>
  );
}
