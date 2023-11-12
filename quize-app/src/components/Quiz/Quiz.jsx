import { useState } from "react";
import style from "./Quiz.module.css";
import { useMediaQuery } from "react-responsive";
import { resultInitial } from "../../Question";
import QuizTimeout from "../QuizTimeout/QuizTimeout";
import Result from "../Result/Result";


function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setanswerIndex] = useState(null);
  const [answer, setanswer] = useState(null);
  const [result, setResult] = useState(resultInitial);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);
  const [inputAnswer, setinputAnswer] = useState("");

 

  const isTablet = useMediaQuery({ query: '(max-width: 999px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 506px)' });

    const { question, choices, correctAnswer,type } = questions[currentQuestion];

    

    function handelChanges(finalanswer) {
      console.log(finalanswer);
      setShowAnswerTimer(false)
      setanswerIndex (null);
      setinputAnswer(''),
      setResult((prev)=>
      finalanswer ? {...prev,score:prev.score + 5, correctAnswer:prev.correctAnswer + 1} :{...prev,wrongAnswer:prev.wrongAnswer + 1}
      )

      if (currentQuestion!==questions.length - 1 ) {
        setCurrentQuestion(currentQuestion + 1);
      }else{
        setCurrentQuestion(0);
        setShowResult(true);
      }

      setTimeout(()=>{
        setShowAnswerTimer(true)
      })
 
    }
    
    function onAnwserClick(choices,i) {
      console.log(choices)
      setanswerIndex(i);
      if (choices===correctAnswer) {
        setanswer(true);
      }else {
        setanswer(false);
      }
     
    }

    function handelRestartGame() {
      setResult(resultInitial);
      setShowResult(false);
    }


    function handelTimeUp() {
      setanswer(false);
      handelChanges(false);
    }


    function handelInput(e) {
      setinputAnswer(e.target.value);
      if (e.target.value === correctAnswer) {
        setanswer(true)
      }else {
        setanswer(false)
      }
    }

    function getAnswerUi() {

      if (type === 'FIB') {
        return (<input className={` ${isMobile ? style.quizChoicesFixed :style.quizChoices } `} value={inputAnswer} onChange={handelInput}/>)
      }
      
      return ( <div className={style.quizChoicesContainer}>

        {choices.map((choices,i)=>{
            return <button key={i} className={`${style.quizChoices} ${choices===correctAnswer && answerIndex===i  ? style.correct : null } ${choices!==correctAnswer && answerIndex===i  ? style.wrong : null }  `} onClick={()=>onAnwserClick(choices,i)}  disabled={answerIndex!==null}>{choices}</button>
        })}

    </div>)

    }


   
  
  

  return ( 
    <div className={` ${isTablet ? style.QuizFixed :style.Quiz } ${isMobile ? style.QuizFixed2 :style.Quiz } `}>

      {!showResult ? (<>
       
       {showAnswerTimer && (<QuizTimeout  duration={10} onTimeUp={handelTimeUp}/>)}

      <div className={style.questionNumberContainer}>
        <span className={style.activeQuestionNo}>{currentQuestion + 1}</span>
        <span className={style.totalQestion}>/{questions.length}</span>
      </div>
        <h2 className={style.quizQuestions}>{question}</h2>

        <div className={style.quizChoicesContainer}>

            {getAnswerUi()}
    
        </div>

        <div className={style.quizbuttonContainer}>
         <button className={` ${answerIndex===null && !inputAnswer  ?style.disabled : style.quizbutton} `} onClick={()=>handelChanges(answer)} disabled={answerIndex===null && !inputAnswer}>
          {currentQuestion===questions.length - 1 ? "Finish" : "Next"}
          </button>

        </div>
        </>)
         : (<Result handelRestartGame={handelRestartGame} result={result} totalQestions={questions.length}/>)}


    </div>
  );
}

export default Quiz;
