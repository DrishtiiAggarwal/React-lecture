function RestaurantCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h2>{props.name}</h2>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default RestaurantCard;
