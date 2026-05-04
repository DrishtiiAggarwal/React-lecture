import LikeButton from '../components/LikeButton';

export default function Page3() {
  return (
    <section className="section full-screen">
      <h2>3. useState (Fixed ✅)</h2>
      <p>Now the screen updates instantly on every click using React state.</p>
      <div className="demo-box success">
        <LikeButton />
      </div>
    </section>
  );
}
