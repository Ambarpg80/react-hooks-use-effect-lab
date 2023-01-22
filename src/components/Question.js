import React, { useEffect, useState } from "react";

function Question({ question, onAnswered ,setQuestions}) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  const Answered= onAnswered(false)
  // add useEffect code
  useEffect(() => {
    const countDown = setTimeout(() => {
        return setTimeRemaining(timeRemaining => timeRemaining - 1 )
    }, 1000);
    return () => clearTimeout(countDown);
            
    
    }, [Answered, timeRemaining] )


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
