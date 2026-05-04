import RestaurantCard from '../components/RestaurantCard';

export default function Page1() {
  return (
    <section className="section full-screen">
      <h2>1. Components and Props</h2>
      <p>Reusable components that accept data via props</p>
      <div className="cards-container">
        <RestaurantCard name="KFC" rating={4.2} />
        <RestaurantCard name="McDonald's" rating={4.5} />
      </div>
    </section>
  );
}
