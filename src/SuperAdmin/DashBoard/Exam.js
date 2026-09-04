import React, { useState, useEffect } from 'react';
import './Exam.css';
//import SuperSidebar from './SuperSidebar.js';
import Question from './Question';


function Exam() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState((Array(Question.length).fill('')));
  const [loading, setLoading] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Correct Answer Count
  

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    setAnswers(savedAnswers);
  }, []);

  useEffect(() => {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    const timer = setInterval(() =>{
      if(timeRemaining > 0) {
        setTimeRemaining(time => time-1);
      }
      else{
        submitExam();
      }
    }, 1000);

    return () => clearInterval(timer);

  },[timeRemaining]);

  useEffect(() => {
    setQuestions(Question);
    setAnswers(Array(Question.length).fill(''));
    setLoading(false);
  }, []);


  const handleQuestionChange = (index) => {
    setCurrentQuestion(index);
    setSelectedOption(answers[index]);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;

    if (option === questions[currentQuestion].answer) {
      
      setCorrectAnswersCount((count) => count + 1);// If answer === selected answer then increment counter by +1
    }
    setAnswers(newAnswers);

    console.log('Answers:', newAnswers);
  };

  const saveAndNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]);
    }
  };

  const previous = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
    }
  };

  const submitExam = () => 
  {
    console.log('Correct Answers:',correctAnswersCount);//Show counter after submitting exam
    alert('Exam Submitted ! ThankYou.');//show alert when the submit exam button is clicked
  };

  const isQuestionAttempted = (index) => {
    return answers[index] !== '';
  };

  const isQuestionVisited = (index) => {
    return index <= currentQuestion;
  };
  

  const renderQuestionButtons = () => {
    return (
      <div className='button-container1'>
        <div className='button-grid1'
         style={{
          width:"100%",

          }}>
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleQuestionChange(index)}
              className={`question-button ${
                isQuestionAttempted(index)
                  ? 'attempted-button'
                  : index === currentQuestion
                  ? 'current-question-button'
                  : isQuestionVisited(index)
                  ? 'visited-but-unattempted-button'
                  : 'not-attempted-button'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  const renderQuestion = () => {
    if (loading) {
      return <p>Loading questions...</p>;
    }

    const question = questions[currentQuestion];
    return (
      <div>
        <h3 style={{ fontSize: '22px', color: 'black' }}>
          Q.{currentQuestion + 1} {question.question}
        </h3>
        <ul className='ul'>
          {question.options.map((option, index) => (
            <li key={index}>
              <label
                style={{
                  paddingTop: '15px',
                  fontSize: '18px',
                  color: '#676767',
                }}
              >
                <input
                  type='radio'
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <div className='button-container' style={{ paddingTop: '50px' }}>
          <button
            onClick={previous}
            className='small-button'
            disabled={currentQuestion === 0}
            style={{
              height: '40px',
              width: '30%',
              marginLeft:"100px"
            }}
          >
            Previous Que.
          </button>


            {currentQuestion < questions.length-1 && (
          <button
            onClick={saveAndNext}
            className='small-button'
            style={{
              height: '40px',
              width: '30%',
              backgroundColor: isQuestionAttempted(currentQuestion) ? 'green' : '',
            }}
          >
            Save & Next
          </button>
          )}

          {currentQuestion === questions.length-1 && (
          <button
          onClick={submitExam}
          className='small-button'
          style={{height:"40px",width:"30%"}}
          >
              Submit Exam
          </button>
          )}

          
        </div>
      </div>
    );
  };

  const renderInstructions = () => {
    const instructionItems = [
      { color: 'green', text: 'Attempted Questions' },
      { color: 'blue', text: 'Current Question' },
      { color: 'red', text: 'Visited but not attempted Questions' },
    ];

    return (
      <div className='instruction-card'>
        <h3>Instructions</h3>
        <br></br>
        <h5 style={{paddingRight:"73px",fontSize:"18px"}}>Do not Refresh Page/Site</h5>
        {instructionItems.map((item, index) => (
          <p key={index}>
            <span className={`color-box ${item.color}`}></span>
            {item.text}
          </p>
        ))}
        <p>Time Remaining : {Math.floor(timeRemaining /60)} : {(timeRemaining % 60).toLocaleString('en-us',{minimumIntegerDigits:2})}</p>
      </div>
    );  };




  return (
    <>
      <div>
        
        <div className='App'>
          <div className='sidebar'>
          {renderInstructions()} {/* Add instructions directly */}
            <h3 style={{ textAlign: 'center' }}>MCQ Quiz</h3>
            {renderQuestionButtons()}
          </div>
          <div className='content' style={{ marginTop: '100px' }}>
            {renderQuestion()}
            {/* <div>
              <p>Correct Answers:{correctAnswersCount}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Exam;

