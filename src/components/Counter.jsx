import { useReducer } from "react";
import "./Counter.css";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="counter-container">
      <div className="counter-display">
        <p>Current Count:</p>
        <h1 className="counter-value">{state.count}</h1>
      </div>
      <div className="counter-buttons">
        <button 
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="btn btn-danger"
        >
          − Decrement
        </button>
        <button 
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="btn btn-success"
        >
          + Increment
        </button>
        <button 
          onClick={() => dispatch({ type: "RESET" })}
          className="btn btn-warning"
        >
          ↻ Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;