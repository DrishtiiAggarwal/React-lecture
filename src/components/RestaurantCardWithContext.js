import { useUsername } from "../context/UserContext";

function RestaurantCardWithContext(props) {
  const { username } = useUsername();

  return (
    <div className="restaurant-card">
      <h2>{props.name}</h2>
      <p>Rating: {props.rating}</p>
      <p>Liked by: {username || "You"}</p>
    </div>
  );
}

export default RestaurantCardWithContext;
