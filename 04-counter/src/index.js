import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date().toDateString());

  // if (step > 0) setCount((count) => count * step);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((val) => val - 1)}>-</button>Step: {step}
        <button onClick={() => setStep((val) => val + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((val) => val - step)}>-</button>Count:{" "}
        {count}
        <button onClick={() => setCount((val) => val + step)}>+</button>
      </div>
      <p>
        {count} days from now is {date.toDateString()}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
