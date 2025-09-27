import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Question from "./components/question.jsx";
import Choice from "./components/choice.jsx";
import Score from "./components/score.jsx";
import GameOver from "./components/gameover.jsx";
import Cheer from "./components/cheer.jsx";
import axios from "axios";
import "./styles/index.css";
//
const winningScore = 10;
function App() {
  const [choices, setChoices] = useState([]);
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(true);
  const [won, setWon] = useState(false);
  // const [usedPics, setUsedPics] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await axios.get("http://localhost:5000/choice");
        console.log(result.data);
        // console.log(result.data.num);
        setChoices(result.data.choices);
        setNum(result.data.num);
      } catch (err) {
        console.error(err);
      }
    };
    func();
  }, [score]);

  useEffect(() => {
    // setUsedPics((prevUsed) => [...prevUsed, num]);
    if (score == winningScore) {
      setWon(true);
    }
  }, [score]);

  function restart() {
    window.location.reload();
  }
  console.log(choices);
  console.log(num);
  const answer = choices[0];
  const rand = Math.floor(Math.random() * 3);
  const chA = choices[rand];
  const chB = choices[(rand + 1) % 3];
  const chC = choices[(rand + 2) % 3];
  return (
    <div className="whole-container">
      {!passed ? (
        <GameOver restart={restart} score={score} />
      ) : won ? (
        <Cheer winningScore={winningScore} restart={restart} />
      ) : (
        <>
          <Score currentScore={score} />
          <Question n={num} />
          <Choice
            A={chA}
            B={chB}
            C={chC}
            answer={answer}
            updateScore={setScore}
            setPassed={setPassed}
          />
        </>
      )}
    </div>
  );
}

export default App;
