import React, { useState, useEffect } from 'react';
        import './SExam.css';
        import Navbar from './Navbar';
        import shuffledQuestions from '../SuperAdmin/DashBoard/Question';
        import { v4 as uuidv4 } from 'uuid';

        function StudentExam() {
          const [questions, setQuestions] = useState([]);
          const [currentQuestion, setCurrentQuestion] = useState(0);
          const [selectedOption, setSelectedOption] = useState(null);
          const [answers, setAnswers] = useState([]);
          const [loading, setLoading] = useState(true);
          const [timeRemaining, setTimeRemaining] = useState(60);//5400
          const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Correct Answer Count
          const [timeInterval, setTimeInterval] = useState(null);
          const [setId, setSetId] = useState(null);
          const [questionset, setQuestionSet] = useState([]);
          const [question, setQuestion] = useState([]);
          
          

          useEffect(() => {
            const initialQuestionsSet = shuffledQuestions.slice(0, 10);
            const setIdOfFirstQuestion = initialQuestionsSet[0].setId; 
            setQuestionSet(initialQuestionsSet);
            setQuestions(initialQuestionsSet);
            setSetId(setIdOfFirstQuestion);
            setLoading(false);
          }, []);
        


          useEffect(() => {
            localStorage.setItem('quizAnswers', JSON.stringify(answers));
          }, [answers]);

          

          useEffect(() => {
            const timer = setInterval(() => {
            if (timeRemaining > 0) {
            setTimeRemaining((time) => time - 1);
            } 
            else 
            {
            submitExam(); 
            clearInterval(timer);
            }
          }, 1000);

          setTimeInterval(timer);

          return () => clearInterval(timer);
          }, [timeRemaining]);


          
        useEffect(() => 
        {
          if (currentQuestion % 10 === 0 && currentQuestion > 0) 
          {
            const startIndex = currentQuestion;
            const endIndex = startIndex + 10;
            const newQuestionSet = shuffledQuestions.slice(startIndex, endIndex);
            setQuestionSet(newQuestionSet);
            setQuestion(newQuestionSet);
          }
        }, [currentQuestion])


          useEffect(() => 
          {
            setQuestions(shuffledQuestions);
            setAnswers(Array(shuffledQuestions.length).fill(''));
            setLoading(false);
          }, []);


          const handleQuestionChange = (index) => 
          {
            setCurrentQuestion(index);
            setSelectedOption(answers[index]);
          };


          const handleOptionChange = (option) =>
          {
            setSelectedOption(option);

          };


          const saveAndNext = () => 
          {
            if(currentQuestion < shuffledQuestions.length - 1) 
            { 
              const isCorrect = selectedOption === shuffledQuestions[currentQuestion].answer;
            if(isCorrect) 
            {
            setCorrectAnswersCount(count => count + 1)
            }

            
            const newAnswers = [...answers];
            newAnswers[currentQuestion] = selectedOption;
            setAnswers(newAnswers);
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(newAnswers[currentQuestion + 1]);

              console.log('Selected Options:', newAnswers);
          }
        
          };

          const previous = () => 
          {
            if (currentQuestion > 0) 
            {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(answers[currentQuestion - 1]);
            }
          };

          const submitExam = () => {
            clearInterval(timeInterval);
             setTimeRemaining(0);
            console.log(`Exam submitted for ${setId}! Total Correct Answers:`, correctAnswersCount);
            alert(`Exam Submitted for ${setId}! Thank You.`);
            
          };

          const isQuestionAttempted = (index) => 
          {
            return answers[index] !== '';
          };

          const isQuestionVisited = (index) => 
          {
            return index <= currentQuestion;
          };
          

          const renderQuestionButtons = () => 
          {
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
                 {/* <p>Set ID: {setId}</p> */}
                <p>Time Remaining : {Math.floor(timeRemaining /60)} : {(timeRemaining % 60).toLocaleString('en-us',{minimumIntegerDigits:2})}</p>
              </div>
            );  };




          return (
            <>
              <div>
                <Navbar />
                <div className='App'>
                  <div className='sidebar'>
                  {renderInstructions()} {/* Add instructions directly */}
                    <h3 style={{ textAlign: 'center' }}>MCQ Quiz</h3>
                    {renderQuestionButtons()}
                  </div>
                  <div className='content' style={{ marginTop: '100px' }}>
                    {renderQuestion()}

                  </div>
                </div>
              </div>
            </>
          );
          
        }

        export default StudentExam;
