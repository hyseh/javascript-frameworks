import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import ProductPricing from './ProductPricing';

export default function ProductCard({
  id,
  title,
  description,
  price,
  discountedPrice,
  image,
}) {
  return (
    <div key={id}>
      <Link to={`product/${id}`}>
        <ProductImage image={image} title={title} />
        <div>
          <ProductDetails title={title} description={description} />
          <ProductPricing price={price} discountedPrice={discountedPrice} />
        </div>
      </Link>
    </div>
  );
}
