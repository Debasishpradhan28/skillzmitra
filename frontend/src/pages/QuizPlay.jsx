// src/pages/QuizPlay.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import he from "he"; // For decoding HTML entities



export default function QuizPlay() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const settings = JSON.parse(localStorage.getItem("quizSettings")) || {
    category: "9",
    difficulty: "medium",
    type: "multiple",
    timeLimit: true,
  };

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
    )
      .then((res) => res.json())
      .then((data) => {
        const processed = data.results.map((q) => ({
          ...q,
          allAnswers: shuffleArray([
            ...q.incorrect_answers,
            q.correct_answer,
          ]),
        }));
        setQuestions(processed);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (
      settings.timeLimit &&
      questions.length > 0 &&
      currentIndex < questions.length
    ) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            setSelectedOption(null);
setShowAnswer(false);
setCurrentIndex((prev) => prev + 1);
setTimer(15);

            clearInterval(countdown);
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [currentIndex, questions]);

  const handleOptionClick = (option) => {
  if (showAnswer) return;

  setSelectedOption(option);
  setShowAnswer(true);

  if (option === questions[currentIndex].correct_answer) {
    setScore((prev) => prev + 1);
  }

  setTimeout(() => {
    setShowAnswer(false);
    setSelectedOption(null);
    setTimer(15);
    setCurrentIndex((prev) => prev + 1);
  }, 1000); // 1 second delay
};


  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
  <p className="text-xl font-semibold text-gray-700">
    Loading questions...
  </p>
</div>

    );

  if (currentIndex >= questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-full max-w-md"></div>
        <h2 className="text-3xl font-bold text-green-700 mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-6">
          Your Score: <span className="font-semibold">{score}</span> /{" "}
          {questions.length}
        </p>
        <button
          onClick={() => navigate("/quiz")}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
  <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6">
    <div
      key={currentIndex}
      className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6
                 transform transition-all duration-500 ease-in-out
                 animate-slide"
    >
      {/* Top bar */}
      <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
        <span className="font-semibold">
          Question {currentIndex + 1} of {questions.length}
        </span>

        <div className="flex items-center gap-4">
          {settings.timeLimit && (
            <span className="text-red-600 font-medium">⏱ {timer}s</span>
          )}

          {/* Quit Quiz */}
          <button
            onClick={() => navigate("/quiz")}
            className="text-red-500 border border-red-300 px-3 py-1 rounded hover:bg-red-50 transition"
          >
            Quit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-500"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold mb-6 text-gray-800">
        {he.decode(currentQ.question)}
      </h3>

      {/* Options */}
      <div className="grid gap-3">
        {currentQ.allAnswers.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(option)}
            disabled={showAnswer}
            className={`border rounded-lg px-4 py-2 text-left transition-all duration-200
              ${
                showAnswer
                  ? option === currentQ.correct_answer
                    ? "bg-green-100 border-green-500"
                    : option === selectedOption
                    ? "bg-red-100 border-red-500"
                    : "bg-gray-100 border-gray-300"
                  : "bg-gray-100 border-gray-300 hover:bg-blue-100"
              }
            `}
          >
            {he.decode(option)}
          </button>
        ))}
      </div>
    </div>
  </div>
);

}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}