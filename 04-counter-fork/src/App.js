import { useState } from "react";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date().toDateString());

  // if (step > 0) setCount((count) => count * step);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="app">
      <div>
        {/* <button onClick={() => setStep((val) => val - 1)}>-</button>Step: {step} */}
        {/* <button onClick={() => setStep((val) => val + 1)}>+</button> */}
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((val) => val - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>
      <button onClick={() => setCount((val) => val + step)}>+</button>
      <p>
        {count === 0 ? null : `${count}days from`} Today is{" "}
        {date.toDateString()}
      </p>
      {count !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
