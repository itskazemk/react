import Options from "./Options";
import { useQuiz } from "../Contexts/QuizContext";

function Question() {
  const { questions, index, answer, dispatch } = useQuiz();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
