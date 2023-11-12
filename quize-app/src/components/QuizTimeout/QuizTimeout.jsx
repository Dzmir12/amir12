import React from 'react'
import style from './QuizTimeout.module.css'
import { useEffect,useState,useRef } from 'react'


function QuizTimeout({duration,onTimeUp}) {

  const [counter,setCounter]=useState(0);
  const [progressLoaded,setProgressLoaded]=useState(0);
  const intervalRef = useRef();

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      setCounter((cur)=>cur +1)
    },1000);

    return ()=>clearInterval(intervalRef.current);

    

  },[]);


  useEffect(()=>{
    setProgressLoaded(100*(counter/duration));
    if (counter=== duration) {
      clearInterval(intervalRef.current);

      // because we put timeout-duration to 1s
     setTimeout(()=>{
      onTimeUp();
     },1000)
    }
  },[counter])




  return (
    <div className={style.quizeTimerContainer}>
      <div className={style.quizeprogress}  style={{width:`${progressLoaded}%`,backgroundColor:`${progressLoaded <40 ?"lightgreen" :progressLoaded <70 ? 'orange':'red'}`}}></div>
    </div>
  )
}

export default QuizTimeout