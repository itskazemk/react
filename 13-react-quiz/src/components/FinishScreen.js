import { useQuiz } from "../Contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} of {maxPossiblePoints}{" "}
        <strong>{Math.ceil(percentage)}</strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Again!
      </button>
    </>
  );
}

export default FinishScreen;
