import { useState } from "react";

const options = [
  { value: 0, text: "Dissatisfied (0%)" },
  { value: 5, text: "It was Okay (5%)" },
  { value: 10, text: "It was Good (10%)" },
  { value: 20, text: "Absolutely Amazing  (20%)" },
];

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  // const [tip, setTip] = useState(0);

  const tip = ((tip1 + tip2) / 100) * bill;

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div style={{ fontFamily: "vazirmatn", padding: "10px" }}>
      <Bill bill={bill} onBill={setBill} />
      <SelectPercent
        text={"you would pay? "}
        options={options}
        tip={tip1}
        onTip={setTip1}
      />
      <SelectPercent
        text={"your friend would pay? "}
        options={options}
        tip={tip2}
        onTip={setTip2}
      />
      <OutPut tip={tip} tip1={tip1} tip2={tip2} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="text"
        value={bill}
        onChange={(el) => onBill(Number(el.target.value))}
      />
    </div>
  );
}

function SelectPercent({ text, options, tip, onTip }) {
  return (
    <div>
      <span>{text}</span>
      <select value={tip} onChange={(el) => onTip(Number(el.target.value))}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

function OutPut({ tip, tip1, tip2 }) {
  return (
    <div>
      <p>
        You pay should <strong>${tip}</strong> (${tip1}+${tip2}) tip
      </p>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Resset</button>;
}
