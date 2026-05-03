import RestaurantCard from './components/RestaurantCard';
import LikeButtonBroken from './components/LikeButtonBroken';
import LikeButton from './components/LikeButton';
import UserContext from './context/UserContext';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>

      <h1>React Lecture Demo</h1>

      {/* 1. Components + Props */}
      <h2>1. Components and Props</h2>
      <RestaurantCard name="KFC" rating={4.2} />
      <RestaurantCard name="McDonald's" rating={4.5} />

      {/* 2. Broken Like Button */}
      <h2>2. Normal Variable (Broken)</h2>
      <p>Click the button — open Console (F12) to see it changing, but the screen won't update.</p>
      <LikeButtonBroken />

      {/* 3. useState Like Button */}
      <h2>3. useState (Fixed)</h2>
      <p>Now the screen updates instantly on every click.</p>
      <LikeButton />

      {/* 4. Context */}
      <h2>4. Context — No Prop Drilling</h2>
      <UserContext.Provider value={{ name: 'Rahul' }}>
        <RestaurantList />
      </UserContext.Provider>

    </div>
  );
}

export default App;