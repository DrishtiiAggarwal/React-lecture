import { UsernameProvider } from '../context/UserContext';
import RestaurantList from '../components/RestaurantList';

export default function Page4() {
  return (
    <section className="section full-screen">
      <h2>4. Context — No Prop Drilling</h2>
      <p>Share data across components without passing props down every level</p>
      <div className="cards-container">
        <UsernameProvider>
          <RestaurantList />
        </UsernameProvider>
      </div>
    </section>
  );
}
