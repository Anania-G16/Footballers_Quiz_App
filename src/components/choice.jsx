import { useState } from "react";
import Button from "./button.jsx";

function Choice(props) {
  // const [potentialAnswer, setPotentialAnswer] = useState(null);
  function answerChecker(potentialAnswer) {
    if (props.answer === potentialAnswer) {
      props.updateScore((prev) => prev + 1);
    } else {
      // props.updateScore((prev) => prev - 1);
      props.setPassed(false);
    }
  }
  return (
    <div className="choice-container">
      <Button content={props.A} checkAnswer={answerChecker} />
      <Button content={props.C} checkAnswer={answerChecker} />
      <Button content={props.B} checkAnswer={answerChecker} />
    </div>
  );
}
export default Choice;
/*  1 - beckham
    2 - salah
    3 - rooney
    4 - messi
    5 - dembele */
