// // src/pages/QuizPlay.jsx
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import he from "he"; // For decoding HTML entities

// export default function QuizPlay() {
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [timer, setTimer] = useState(15);
  
//   const navigate = useNavigate();

//   const settings = JSON.parse(localStorage.getItem("quizSettings")) || {
//     category: "9",
//     difficulty: "medium",
//     type: "multiple",
//     timeLimit: true,
//   };

//   useEffect(() => {
//     fetch(
//       `https://opentdb.com/api.php?amount=10&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const processed = data.results.map((q) => ({
//           ...q,
//           allAnswers: shuffleArray([
//             ...q.incorrect_answers,
//             q.correct_answer,
//           ]),
//         }));
//         setQuestions(processed);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (
//       settings.timeLimit &&
//       questions.length > 0 &&
//       currentIndex < questions.length
//     ) {
//       const countdown = setInterval(() => {
//         setTimer((prev) => {
//           if (prev === 1) {
//             handleNext(null);
//             clearInterval(countdown);
//             return 15;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(countdown);
//     }
//   }, [currentIndex, questions]);

//   const handleNext = (selected) => {
//     if (selected === questions[currentIndex].correct_answer) {
//       setScore(score + 1);
//     }
//     setTimer(15);
//     setCurrentIndex(currentIndex + 1);
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-screen text-xl">
//         Loading questions...
//       </div>
//     );

//   if (currentIndex >= questions.length) {
//     return (
//       <div className="w-screen flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-white px-4">
//         <h2 className="text-3xl font-bold text-green-700 mb-4">Quiz Completed!</h2>
//         <p className="text-xl mb-6">
//           Your Score: <span className="font-semibold">{score}</span> /{" "}
//           {questions.length}
//         </p>
//         <button
//           onClick={() => navigate("/quiz")}
//           className="bg-indigo-600 text-black px-6 py-2 rounded hover:bg-indigo-700 transition"
//         >
//           Go to Home
//         </button>
//       </div>
//     );
//   }

//   const currentQ = questions[currentIndex];

//   return (
//     <div className="w-screen min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
//       <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6 animate-fade-in">
//         <div className="flex justify-between mb-4 text-sm text-gray-600">
//           <span className="font-semibold">
//             Question {currentIndex + 1} of {questions.length}
//           </span>
//           {settings.timeLimit && (
//             <span className="text-red-600 font-medium">⏱ {timer}s</span>
//           )}
//         </div>

//         <h3 className="text-xl font-semibold mb-6 text-gray-800">
//           {he.decode(currentQ.question)}
//         </h3>

//         <div className="grid gap-3">
//           {currentQ.allAnswers.map((option, i) => (
//             <button
//               key={i}
//               onClick={() => handleNext(option)}
//               className="bg-gray-100 hover:bg-blue-100 border border-gray-300 rounded-lg px-4 py-2 text-left transition-all duration-200"
//             >
//               {he.decode(option)}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function shuffleArray(array) {
//   return array.sort(() => Math.random() - 0.5);
// }


// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import he from "he";

// export default function QuizPlay() {
//   const [questions, setQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [timer, setTimer] = useState(15);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const settings =
//     location.state ||
//     JSON.parse(localStorage.getItem("quizSettings")) || {
//       category: 9,
//       difficulty: "medium",
//       type: "multiple",
//       timeLimit: true,
//     };
    

//   useEffect(() => {
//     fetch(
//       `https://opentdb.com/api.php?amount=10&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const processed = data.results.map((q) => ({
//           ...q,
//           allAnswers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
//         }));
//         setQuestions(processed);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (settings.timeLimit && questions.length > 0 && currentIndex < questions.length) {
//       const countdown = setInterval(() => {
//         setTimer((prev) => {
//           if (prev === 1) {
//             handleNext(null);
//             clearInterval(countdown);
//             return 15;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(countdown);
//     }
//   }, [currentIndex, questions]);

//   const handleNext = (selected) => {
//     setSelectedAnswer(selected);
//     setTimeout(() => {
//       if (selected === questions[currentIndex].correct_answer) {
//         setScore(score + 1);
//       }
//       setTimer(15);
//       setSelectedAnswer(null);
//       setCurrentIndex(currentIndex + 1);
//     }, 1000);
//   };

//   if (loading)
//     return <div className="flex items-center justify-center h-screen text-xl">Loading questions...</div>;

//   if (currentIndex >= questions.length) {
//     return (
//       <div className="w-screen flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-white px-4">
//         <h2 className="text-3xl font-bold text-green-700 mb-4">Quiz Completed!</h2>
//         <p className="text-xl mb-6">
//           Your Score: <span className="font-semibold">{score}</span> / {questions.length}
//         </p>
//         <button
//           onClick={() => navigate("/quiz")}
//           className="bg-indigo-600 text-black px-6 py-2 rounded hover:bg-indigo-700"
//         >
//           Go to Home
//         </button>
//       </div>
//     );
//   }

//   const currentQ = questions[currentIndex];

//   return (
//     <div className="w-screen min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
//       <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
//         {/* Show quiz details */}
//         <div className="mb-4 text-sm text-gray-600 flex justify-between">
//           <span>Category: {settings.category}</span>
//           <span>Difficulty: {settings.difficulty}</span>
//           <span>Type: {settings.type}</span>
//           {settings.timeLimit && <span className="text-red-600">⏱ {timer}s</span>}
//         </div>

//         <h3 className="text-xl font-semibold mb-6 text-gray-800">{he.decode(currentQ.question)}</h3>

//         <div className="grid gap-3">
//           {currentQ.allAnswers.map((option, i) => {
//             let btnStyle = "bg-gray-100 border border-gray-300";
//             if (selectedAnswer) {
//               if (option === currentQ.correct_answer) btnStyle = "bg-green-500 text-white shadow-[0_0_10px_#00ff00]";
//               else if (option === selectedAnswer) btnStyle = "bg-red-500 text-white shadow-[0_0_10px_#ff0000]";
//             }
//             return (
//               <button
//                 key={i}
//                 onClick={() => !selectedAnswer && handleNext(option)}
//                 className={`${btnStyle} rounded-lg px-4 py-2 text-left transition-all`}
//               >
//                 {he.decode(option)}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function shuffleArray(array) {
//   return [...array].sort(() => Math.random() - 0.5);
// }

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import he from "he";

export default function QuizPlay() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [endQuiz, setEndQuiz] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const settings =
    location.state ||
    JSON.parse(localStorage.getItem("quizSettings")) || {
      category: 9,
      difficulty: "medium",
      type: "multiple",
      timeLimit: true,
    };

  const categoryNames = {
    9: "General Knowledge",
    17: "Science & Nature",
    18: "Computers",
    23: "History",
    22: "Geography",
    21: "Sports",
    11: "Film & TV",
    12: "Music",
  };

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
    )
      .then((res) => res.json())
      .then((data) => {
        const processed = data.results.map((q) => ({
          ...q,
          allAnswers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
        }));
        setQuestions(processed);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (settings.timeLimit && questions.length > 0 && currentIndex < questions.length && !endQuiz) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            handleNext(null);
            clearInterval(countdown);
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [currentIndex, questions, endQuiz]);

  const handleNext = (selected) => {
    setSelectedAnswer(selected);
    setTimeout(() => {
      if (selected === questions[currentIndex]?.correct_answer) {
        setScore((prev) => prev + 1);
      }
      setTimer(15);
      setSelectedAnswer(null);
      setCurrentIndex((prev) => prev + 1);
    }, 1000);
  };

  const handleEndQuiz = () => {
    setEndQuiz(true);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading questions...
      </div>
    );

  if (endQuiz || currentIndex >= questions.length) {
    return (
      <div className="w-screen flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-white px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-1">Category: {categoryNames[settings.category] || "Unknown"}</p>
        <p className="text-lg mb-1">Difficulty: {settings.difficulty}</p>
        <p className="text-lg mb-1">Type: {settings.type === "boolean" ? "True / False" : "Multiple Choice"}</p>
        <p className="text-lg mb-4">Total Questions: {questions.length}</p>
        <p className="text-xl mb-6">
          Your Score: <span className="font-semibold">{score}</span> / {questions.length}
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
    <div className="w-screen min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        {/* Quiz Details + End Quiz Button */}
        <div className="mb-4 text-sm text-gray-600 flex flex-wrap justify-between items-center gap-2">
          <span>Category: {categoryNames[settings.category]}</span>
          <span>Difficulty: {settings.difficulty}</span>
          <span>Type: {settings.type === "boolean" ? "True / False" : "Multiple Choice"}</span>
          <span>Q {currentIndex + 1} / {questions.length}</span>
          {settings.timeLimit && <span className="text-red-600 font-medium">⏱ {timer}s</span>}
        </div>

        <button
          onClick={handleEndQuiz}
          className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          End Quiz
        </button>

        {/* Question */}
        <h3 className="text-xl font-semibold mb-6 text-gray-800">{he.decode(currentQ.question)}</h3>

        {/* Options */}
        <div className="grid gap-3">
          {currentQ.allAnswers.map((option, i) => {
            let btnStyle = "bg-gray-100 border border-gray-300";
            if (selectedAnswer) {
              if (option === currentQ.correct_answer)
                btnStyle = "bg-green-500 text-white shadow-[0_0_10px_#00ff00]";
              else if (option === selectedAnswer)
                btnStyle = "bg-red-500 text-white shadow-[0_0_10px_#ff0000]";
            }
            return (
              <button
                key={i}
                onClick={() => !selectedAnswer && handleNext(option)}
                className={`${btnStyle} rounded-lg px-4 py-2 text-left transition-all`}
              >
                {he.decode(option)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}