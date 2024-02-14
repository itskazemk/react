import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  let testData = 5;
  console.log(testData * step);

  return (
    <div
      style={{
        fontFamily: "roboto",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => setStep((val) => val - 1)}>-</button>Step: {step}
        <button onClick={() => setStep((val) => val + 1)}>+</button>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => setCount((val) => val - 1)}>-</button>Count:{" "}
        {count}
        <button onClick={() => setCount((val) => val + 1)}>+</button>
      </div>
      <p>30 days from now is {date}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
