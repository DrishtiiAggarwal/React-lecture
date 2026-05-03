import RestaurantCard from './RestaurantCard';

function RestaurantList() {
  return (
    <div>
      <RestaurantCard name="KFC" rating={4.2} />
      <RestaurantCard name="McDonald's" rating={4.5} />
      <RestaurantCard name="Burger King" rating={4.1} />
    </div>
  );
}

export default RestaurantList;
