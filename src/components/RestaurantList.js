import RestaurantCardWithContext from './RestaurantCardWithContext';

function RestaurantList() {
  return (
    <div className="cards-container">
      <RestaurantCardWithContext name="KFC" rating={4.2} />
      <RestaurantCardWithContext name="McDonald's" rating={4.5} />
      <RestaurantCardWithContext name="Burger King" rating={4.1} />
    </div>
  );
}

export default RestaurantList;
