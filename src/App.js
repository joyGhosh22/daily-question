
import { useState } from "react";
import "./App.css";

// List of daily questions
const QUESTIONS = [
  {
    question: "What is the time complexity of binary search?",
    answer: "O(log n)",
  },
  {
    question: "What does HTTP stand for?",
    answer: "HyperText Transfer Protocol",
  },
    {
    question: "What does GTTP stand for?",
    answer: "HyperText Transfer PPPPPPPPPPPPPP",
  },
  {
    question: "Name a JavaScript primitive type.",
    answer: "string, number, boolean, null, undefined, symbol, or bigint",
  },
];

function App() {
  // Pick a “daily” question based on today’s date
  const todayIndex = new Date().getDate() % QUESTIONS.length;
  const [currentIndex, setCurrentIndex] = useState(todayIndex);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = QUESTIONS[currentIndex];

  // Show the answer for the current question
  const handleCheckAnswer = () => {
    setShowAnswer(true);
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const nextIndex = (currentIndex + 1) % QUESTIONS.length;
    setCurrentIndex(nextIndex);
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <div className="card">
        <h1 className="title">Daily Question</h1>
        <p className="question" aria-live="polite">{current.question}</p>
        {!showAnswer ? (
          <button className="btn btn-primary" onClick={handleCheckAnswer} aria-label="Show answer">
            Check answer
          </button>
        ) : (
          <div className="answer-box">
            <strong>Answer: </strong>
            <span>{current.answer}</span>
          </div>
        )}
        <button className="btn btn-secondary" onClick={handleNextQuestion} aria-label="Next question">
          Next question
        </button>
      </div>
      <footer className="footer">
        <small>Made with <span role="img" aria-label="love">❤️</span> by EduPilot</small>
      </footer>
    </div>
  );
}

export default App;
