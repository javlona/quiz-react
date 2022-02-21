import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
      id: 1,
			questionText: 'What is the name of the tallest mountain in the world?',
			answerOptions: [
				{ answerText: 'K2', isCorrect: false },
				{ answerText: 'Makalu', isCorrect: false },
				{ answerText: 'Mount Everest', isCorrect: true },
				{ answerText: 'Kilimanjaro', isCorrect: false },
			],
		},
		{
      id: 2,
			questionText: 'What is the name of the longest river in the world',
			answerOptions: [
				{ answerText: 'Amazon river', isCorrect: false },
				{ answerText: 'The Nile', isCorrect: true },
				{ answerText: 'Yangtze river', isCorrect: false },
				{ answerText: 'Yellow river', isCorrect: false },
			],
		},
		{
      id: 3,
			questionText: 'What is the name of the smallest country in the world?',
			answerOptions: [
				{ answerText: 'Vatikan city', isCorrect: true },
				{ answerText: 'Andorra', isCorrect: false },
				{ answerText: 'Tuvalu', isCorrect: false },
				{ answerText: 'Monaco', isCorrect: false },
			],
		},
		{
      id: 4,
			questionText: 'How many time zones does Russia have? ',
			answerOptions: [
				{ answerText: '4', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '11', isCorrect: true },
			],
		},
    {
      id: 5,
			questionText: 'What is the name of the second tallest mountain in the world?',
			answerOptions: [
				{ answerText: 'Mount Everest', isCorrect: false },
				{ answerText: 'Makalu', isCorrect: false },
				{ answerText: 'Kilimanjaro', isCorrect: false },
				{ answerText: 'K2', isCorrect: true },
			],
		},
    {
      id: 6,
			questionText: 'What is the largest country in South America? ',
			answerOptions: [
				{ answerText: 'Chile', isCorrect: false },
				{ answerText: 'Columbia', isCorrect: false },
				{ answerText: 'Argentina', isCorrect: false },
				{ answerText: 'Brazil', isCorrect: true },
			],
		},
    {
      id: 7,
			questionText: 'What is the name of the driest continent on Earth?',
			answerOptions: [
				{ answerText: 'Australia', isCorrect: false },
				{ answerText: 'Asia', isCorrect: false },
				{ answerText: 'Africa', isCorrect: false },
				{ answerText: 'Antarctica', isCorrect: true },
			],
		},
    {
      id: 8,
			questionText: 'What is the name of the smallest US state?',
			answerOptions: [
				{ answerText: 'Connecticut', isCorrect: false },
				{ answerText: 'Maine', isCorrect: false },
				{ answerText: 'Vermont', isCorrect: false },
				{ answerText: 'Rhode Island', isCorrect: true },
			],
		},
    {
      id: 9,
			questionText: 'What is the name of the deepest point in Earth’s oceans?',
			answerOptions: [
				{ answerText: 'Java Trench', isCorrect: false },
				{ answerText: 'Puerto Rico Trench', isCorrect: false },
				{ answerText: 'South Sandwich Trench', isCorrect: false },
				{ answerText: 'Mariana’s Trench', isCorrect: true },
			],
		},
    {
      id: 10,
			questionText: 'What is the name of the largest waterfall in the world?',
			answerOptions: [
				{ answerText: 'Yosemite', isCorrect: false },
				{ answerText: 'Tugela', isCorrect: false },
				{ answerText: 'Victoria', isCorrect: true },
				{ answerText: 'Niagara', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const resetHandler = () => {
    setScore(0);
    window.location.reload(false);
  }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <button onClick={ resetHandler } className='reset-button'>Start over</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}