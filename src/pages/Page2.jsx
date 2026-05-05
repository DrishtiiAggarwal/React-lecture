import LikeButtonBroken from '../components/LikeButtonBroken';

export default function Page2() {
  return (
    <section className="section full-screen">
      <h2>2. Normal Variable</h2>
      <p>Click the button — open Console (F12) to see it changing, but the screen won't update.</p>
      <div className="demo-box warning">
        <LikeButtonBroken />
      </div>
    </section>
  );
}
