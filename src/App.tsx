import { useEffect, useState } from "react";
import "./App.css";
import { Question } from "./components/Question";
import { getQuestions } from "./services/dataService";

function App() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState<any>(null);
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState(-1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(getQuestions());
    setQuestion(questions[count]);
  }, [count])

  const handleNext = () => {
    if (count >= questions.length - 1) {
      setGameOver(true);
      setCount(-1);
    } else {
      setCount(count+1);
    }
  }

  const handleStart = () => {
    setGameOver(false);
    setCount(count + 1);
  }

  const incrementScore = () => {
    setScore(score + 1);
  }

  return (
    <div className="container app">
      <div className="app__score">
        Your Score { score }
        <br/>
      </div>
      {gameOver && (<div> Game Over </div>)}

      {!gameOver && question && (
        <>
          <Question key={question.challenge} question={question} handleNext={handleNext} incrementScore={incrementScore}/>
          <div className="app__actions">
            <button className="app__actions--next" onClick={handleNext}>Next</button>
          </div>
        </>
      )}
      {(gameOver || !question) && (
        <button className="app__start" onClick={ handleStart }>Start</button>
      )}
    </div>
  );
}

export default App;
