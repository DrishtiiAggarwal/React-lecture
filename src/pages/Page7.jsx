import React from "react";
import { useCounterStore } from "../zustand/counterStore";
import "../components/Counter.css";

function Page7() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="counter-container">
      <h1>Section 7: Zustand Counter</h1>
      <div className="counter-display">
        <p>Count: <span className="counter-value">{count}</span></p>
      </div>
      <div className="counter-buttons">
        <button 
          className="btn btn-success"
          onClick={increment}
        >
          ➕ Increase
        </button>
        <button 
          className="btn btn-danger"
          onClick={decrement}
        >
          ➖ Decrease
        </button>
        <button 
          className="btn btn-warning"
          onClick={reset}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Page7;
