import React, { useState } from 'react';

export function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  // クイズの質問と選択肢
  const quiz = {
    question: "Reactで副作用を管理するフックはどれですか？",
    options: [
      { id: 1, text: "useState" },
      { id: 2, text: "useEffect" },
      { id: 3, text: "useContext" },
      { id: 4, text: "useRef" }
    ],
    correctAnswerId: 2 // 正しい答えのID
  };

  // ラジオボタン選択時の処理
  const handleAnswerChange = (e) => {
    setSelectedAnswer(Number(e.target.value));
  };

  // クイズ結果を判定
  const checkAnswer = () => {
    if (selectedAnswer === null) {
      setQuizResult("選択してください！");
      return;
    }
    if (selectedAnswer === quiz.correctAnswerId) {
      setQuizResult("正解！");
    } else {
      setQuizResult("不正解！");
    }
  };

  return (
    <section>
      <h3>クイズ</h3>
      <p>{quiz.question}</p>

      {quiz.options.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            id={`answer-${option.id}`}
            name="quiz"
            value={option.id}
            onChange={handleAnswerChange}
          />
          <label htmlFor={`answer-${option.id}`}>{option.text}</label>
        </div>
      ))}

      <button onClick={checkAnswer}>回答する</button>
      {quizResult && <p>{quizResult}</p>}
    </section>
  );
}