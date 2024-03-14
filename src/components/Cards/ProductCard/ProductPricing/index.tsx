export default function ProductPricing({ price, discountedPrice }) {
  return (
    <div>
      <p>{price}</p>
      {discountedPrice && <p>{discountedPrice}</p>}
    </div>
  );
}
