function RestaurantCard(props) {
  return (
    <div className="restaurant-card">
      <h2>{props.name}</h2>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default RestaurantCard;
