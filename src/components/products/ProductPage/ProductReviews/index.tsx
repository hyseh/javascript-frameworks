export default function ProductReviews({ reviews }) {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, description, rating, username }) => {
        return (
          <div key={id}>
            <span>{rating}</span>
            <p>{description}</p>
            <span>{username}</span>
          </div>
        );
      })}
    </div>
  );
}
