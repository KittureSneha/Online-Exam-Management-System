//import React, { useState, useEffect } from 'react';
//import './SExam.css';
// import SuperSidebar from './SuperSidebar.js';
// import Question from './SuperAdmin/DashBoard/Question.js'
 
import React, { useState, useEffect } from 'react';
import './SExam.css';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

        
        
  function StudentExam() {
      const [questions, setQuestions] = useState([]);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [answers, setAnswers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [timeRemaining, setTimeRemaining] = useState(60);//5400
      const [timeInterval, setTimeInterval] = useState(null);
      const [setId, setSetId] = useState(null);
      const [correctAnswers, setCorrectAnswers] = useState(null); // Correct Answer Count
      const [count ,setCount] = useState(0);
      const {id} = useParams();
   // const fs = require('fs');


        
        
  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    setAnswers(savedAnswers);
  }, []);
  
  
  useEffect(() => {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }, [answers]);
          
  
  useEffect(() => 
  {
    const timer = setInterval(() => {
      if (timeRemaining > 0)
      {
        setTimeRemaining(time => time - 1);
      } 
      else 
      {
        submitExam();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  useEffect(() => {
     fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium')
    //fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium')
      .then((response) => response.json())
      .then((data) => {
        console.log("Data: " , data)
        if (data.response_code === 0) {
          const formattedQuestions = data.results.map((questionItem) => {
            return {
              question: questionItem.question,
              options: [...questionItem.incorrect_answers, questionItem.correct_answer], 
              correct_answer: questionItem.correct_answer, 
            };
          });
          setQuestions(formattedQuestions);
          setAnswers(Array(formattedQuestions.length).fill(''));
          setLoading(false);
        } else {
          console.error('Error fetching questions:', data);
        }
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);
        
  // useEffect(() => {
  //   fetch('https://opentdb.com/api.php?amount=50&category=18&difficulty=medium')
  //     .then((response) => response.json())
  //     .then((data) => {

  //       console.log('API data' , data);
  //         const formattedQuestions = data.results.map((question) => ({
  //         question: question.question,
  //         options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
  //         correctAnswer: question.correct_answer || " ",
  //       }));
  //       setQuestions(formattedQuestions);
  //       setAnswers(Array(formattedQuestions.length).fill(''));
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error('Error fetching questions:', error));
  // }, []);
    
  // useEffect(() =>{
  //   fetch("http://localhost:3000/q")
  //   //fetch("https://opentdb.com/api.php?amount=50&category=18&difficulty=medium")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // if (Array.isArray(data) && data.length > 0) {

  //     setQuestions(data);
  //     setAnswers(Array(data.length).fill(''));
  //     setLoading(false);
  //     // writeDataToDbJson(data);
  //     // }else{
  //     //   console.error('Invalid data format:', data);

  //     // }

  //   })
  //   .catch((error) => console.error('Error fetching questions',error));
  // },[]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/q")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (Array.isArray(data.q) && data.q.length > 0) {
  //         setQuestions(data.q);
  //         setAnswers(Array(data.q.length).fill(''));
  //         setLoading(false);
  //       } else {
  //         console.error('Invalid data format:', data);
  //       }
  //     })
  //     .catch((error) => console.error('Error fetching questions', error));
  // }, []);
    


  // const writeDataToDbJson = (data) => {
  //   const dbJsonPath = './src/Student/db.json'; // Specify the correct path
  
  //   // Convert the data to JSON string
  //   const jsonData = JSON.stringify(data, null, 2); // The third parameter (2) is for indentation
  
  //   // Write the data to the db.json file
  //   fs.writeFile(dbJsonPath, jsonData, (err) => {
  //     if (err) {
  //       console.error('Error writing to db.json:', err);
  //     } else {
  //       console.log('Data written to db.json successfully!');
  //     }
  //   });
  // };
  
  
  // const writeDataToLocalStorage = (data) => {
  //   try {
  //     localStorage.setItem('dbJsonData', JSON.stringify(data, null, 2));
  //     console.log('Data written to localStorage successfully!');
  //   } catch (error) {
  //     console.error('Error writing to localStorage:', error);
  //   }
  // };
  
  // // Replace your existing writeDataToDbJson function with this:
  // const writeDataToDbJson = (data) => {
  //   // Other code...
  
  //   // Write the data to localStorage instead of fs module
  //   writeDataToLocalStorage(data);
  // };

  
  const handleQuestionChange = (index) => {
            setCurrentQuestion(index);
            setSelectedOption(answers[index]);
          };
        
  const handleOptionChange = (option) => {
      setSelectedOption(option);
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = option;
      setAnswers(newAnswers);
      };
        

  const saveAndNext = () => {
        if (currentQuestion < questions.length - 1) {
          const newCount = count + (selectedOption === questions[currentQuestion].correct_answer ? 1 : 0);
          setCount(newCount);
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(answers[currentQuestion + 1]);
          console.log(answers);
        }
      };
      
  // const saveAndNext = () => {
  //   questions.forEach((question, index) => {
  //     const selectedOption = answers[index];
  //     console.log("answers=" +selectedOption+"right="+correctAnswer)
      
    
  //   const correctAnswer = JSON.stringify(questions.correct_answer);
  //   if (selectedOption === correctAnswer)
  //   {
  //     setCount(cot => cot + 1) 
  //   }
  //   console.log(answers);
  // });
  // if(currentQuestion < questions.length - 1){
  //   setCurrentQuestion(currentQuestion + 1);
  //   setSelectedOption(answers[currentQuestion + 1])
  //     }
  //   };
  
  // const saveAndNext = () => {
  //   questions.forEach((question, index) => {
  //     const selectedOption = answers[index];
  //     console.log("answers=" + selectedOption + " right=" + question.correct_answer);
  
  //     if (selectedOption === question.correct_answer) {
  //       setCount(count => count + 1);
  //     }
  //     console.log(answers);
  //   });
  
  //   if (currentQuestion < questions.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //     setSelectedOption(answers[currentQuestion + 1]);
  //   }
  // };
  
  // const saveAndNext = () => {
   
  //   if (currentQuestion < questions.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //     setSelectedOption(answers[currentQuestion + 1]);

  //     questions.forEach((question, index) => {
  //       const selectedOption = answers[index];
  //       const correctAnswer = question.correct_answer; // Access correct_answer from API data
        
  //       //console.log("Answer =", selectedOption, " Correct =", correctAnswer);
    
  //       if (selectedOption === correctAnswer) {
  //         setCount(count + 1);
  //       }
  //       // console.log(answers);
  //     });
    
  //   }
  // };

  
 const previous = () => {
 if (currentQuestion > 0) {
 setCurrentQuestion(currentQuestion - 1);
 setSelectedOption(answers[currentQuestion - 1]);
  }
};

const submitExam = () => {
  clearInterval(timeInterval);
  setTimeRemaining(0);

  let totalCorrect = 0;
  answers.forEach((selectedOption, index) => {
    if (selectedOption === questions[index].correct_answer) {
      totalCorrect++;
    }
  });
  const totalMarks = totalCorrect;
  console.log(`Total correct answers of Student ID ${id}:`, totalCorrect);
  saveTotalMarksWithID(id, totalMarks);
 };

 const saveTotalMarksWithID = (enrolledID, marks) => {
  const totalMarksData = JSON.parse(localStorage.getItem('totalMarks')) || {};
  totalMarksData[enrolledID] = marks;
  localStorage.setItem('totalMarks', JSON.stringify(totalMarksData));


//   const studentId = id; 
//     if (studentId !== null) {
  
//   const localStorageData = JSON.parse(localStorage.getItem('studentData')) || {};

//   localStorageData[studentId] = totalCorrect;

//   localStorage.setItem('studentData', JSON.stringify(localStorageData));
//   }
  alert(`Exam Submitted! Thank You.`);
};


// const submitExam = () => {
// clearInterval(timeInterval);
// setTimeRemaining(0);

// let totalCorrect = 0;
//     answers.forEach((selectedOption, index) => {
//       if (selectedOption === questions[index].correct_answer) {
//         totalCorrect++;
//       }
//     });
//     console.log(`Total correct answers of Student ID ${id}:`, totalCorrect);

//     const studentId = setId; // Replace this with the actual way you get the student id

  
//   const localStorageData = JSON.parse(localStorage.getItem('studentData')) || {};

//   localStorageData[studentId] = totalCorrect;

//  localStorage.setItem('studentData', JSON.stringify(localStorageData));
       
//     alert(`Exam Submitted! Thank You.`);
//   };
  
          
// let correctCount = 0;

// questions.forEach((question, index) => {
// const selectedOption = answers[index];
// console.log("answers=" +selectedOption+"right="+correctAnswer)
//const correctAnswer = JSON.stringify(question.correct_answer);
//const correctAnswer = question.options.find(option => option === selectedOption);

  
// if (selectedOption === correctAnswer) 
  //   if (correctAnswer) {

  //   correctCount += 1;
  // }
    //});
//console.log(`Exam submitted! Correct Answers: ${count}`);

        
        
const isQuestionAttempted = (index) => {  
      return answers[index] !== '';
      };
        
const isQuestionVisited = (index) => {
      return index <= currentQuestion;
      };
          
        
const renderQuestionButtons = () => {
     return (
          <div className='button-container'>
                <div className='button-grid1'>
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
                    }}
                  >
                    Previous
                  </button>
        
                  {currentQuestion < questions.length - 1 && (
                     <button
                    onClick={saveAndNext}
                    className='small-button'
                    style={{
                      height: '40px',
                      width: '30%',
                      backgroundColor: isQuestionAttempted(currentQuestion) ? 'green' : '',
                    }}
                  >Save and Next
                  </button>
                  )}
         
                {currentQuestion === questions.length - 1 && (
                  <button
                    onClick={submitExam}
                    className='small-button'
                    style={{
                      height: '40px',
                      width: '30%',
                    }}
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
                <h4 style={{fontSize:"30px", textAlign:"center", marginBottom:"20px"}}>Instructions</h4>
                {instructionItems.map((item, index) => (
                  <p key={index}>
                    <span className={`color-box ${item.color}`}></span>
                    {item.text}
                  </p>
                ))}
               <p style={{fontWeight:"bolder",fontSize:"20px",marginTop:"20px"}}>Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</p>
        
              </div>
            );  };
        
        
        
          return (
            <>
              <div>
                <Navbar />
                <div className='App'>
                <div className='sidebar'>
                  <p studentId={id} style={{textAlign:"center",fontWeight:"bold"}}>ID : {id}</p>
                  {renderInstructions()} 
        
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
        
        
        
                
       