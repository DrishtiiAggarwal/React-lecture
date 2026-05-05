import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterActions";
import "../components/Counter.css";

function Page6() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>Section 6: Redux Counter</h1>
      <div className="counter-display">
        <p>Count: <span className="counter-value">{count}</span></p>
      </div>
      <div className="counter-buttons">
        <button 
          className="btn btn-success"
          onClick={() => dispatch(increment())}
        >
          ➕ Increase
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => dispatch(decrement())}
        >
          ➖ Decrease
        </button>
      </div>
    </div>
  );
}

export default Page6;
