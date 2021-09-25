import { useState } from "react";

export function Question({question, handleNext, incrementScore}: any) {
  const [giveHint, setGiveHint] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');

  const checkAnswer = () => {
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      alert("Correct answer.");
      handleNext();
      incrementScore();
    } else {
      alert("Incorrect answer.")
    }
  }

  return (
    <div className="question">
      <div className="question__challenge">{question.challenge}</div>
      {giveHint && <div className="question__hint">{question.hint}</div>}
      <div className="question__tags">
        {question.tags.map((tag: string) => {
          return <div className="question__tag" key={tag}>{tag}</div>;
        })}
      </div>
      <div className="question__answer">
        <input className="question__answer--input" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
       </div>
      <div className="questions__actions">
        <button className="question__actions--hint" onClick={() => setGiveHint(true)}>Give me a hint</button>
        <button className="question__actions--check" onClick={() => checkAnswer()}>Check</button>
      </div>
    </div>
  );
}
