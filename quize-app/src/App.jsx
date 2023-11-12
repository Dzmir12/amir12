import Quiz from './components/Quiz/Quiz';
import './App.css'
import { useEffect,useState } from 'react';

function App() {
   
  const[quizQuestions,setQuizQuestions]=useState([])

  // https://644982a3e7eb3378ca4ba471.mockapi.io/questions

  useEffect(()=>{
    getQuestion();
  },[])

  async function getQuestion() {

   let response= await fetch('https://644982a3e7eb3378ca4ba471.mockapi.io/questions');
   let data= await response.json();
   console.log(data)
   if (typeof data!== 'undefined' ) {
    setQuizQuestions(data);
   }
   
    
  }

  // console.log(jsQuizz);

  return (
    <div className='app'>
      <div className='ball-1'></div>
      <div className='ball-2'></div>
      <div className='ball-3'></div>
       {quizQuestions.length && <Quiz questions={quizQuestions} />}
    </div>
  )
}

export default App
