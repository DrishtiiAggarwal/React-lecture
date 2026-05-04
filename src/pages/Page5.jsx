import Counter from '../components/Counter';

export default function Page5() {
  return (
    <section className="section full-screen">
      <h2>5. useReducer — Complex State Logic</h2>
      <p>For more complex state logic, useReducer is cleaner than useState</p>
      <div className="demo-box success">
        <Counter />
      </div>
    </section>
  );
}
