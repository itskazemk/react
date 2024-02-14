import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="python_icon.png" alt="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Kazem Kamali</h1>
      <p>
        blew get down find had industrial very ground goose shot clock coat
        operation purpose quiet green frighten join least die third massage has
        body
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill text="python" emoji="&#9996;" bg="orange" />
      <Skill text=".net" emoji="&#9996;" bg="lightblue" />
      <Skill text="js" emoji="&#9996;" bg="mediumvioletred" />
      <Skill text="sql" emoji="&#9996;" bg="lightblue" />
    </div>
  );
}

function Skill(probs) {
  let divbg = { background: probs.bg };

  return (
    <div className="skill" style={divbg}>
      <span>{probs.text}</span>
      <span>{probs.emoji}</span>
    </div>
  );
}

// startup
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
