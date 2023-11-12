import React, { useState,useEffect } from "react";
import style from "./Result.module.css";
import { useMediaQuery } from "react-responsive";

function Result({ handelRestartGame, result, totalQestions }) {
  const isMobile = useMediaQuery({ query: "(max-width: 506px)" });
  const [name, setName] = useState("");
  const [highScores, setHighScore] = useState([]);
  const [showScore, setShowScore] = useState(false);
  console.log(highScores);

 



  function handelSave() {
    const score = {
      name,
      score: result.score,
    }
    let newHighScore = [...highScores, score].sort((a, b) => b.score - a.score);
    console.log(newHighScore)
    setHighScore(newHighScore);
    setShowScore(true);
    localStorage.setItem("highScores", JSON.stringify(newHighScore));
  }


  function handelTryAgain() {
    setShowScore(false);
    setHighScore([]);
    handelRestartGame();
  }

  useEffect(() => {
    const storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedHighScores) {
      setHighScore(storedHighScores);
    }
  }, []);
  

  return (
    <div className={style.result}>
      <h2 className={style.resultH2}>Resault</h2>
      <p className={style.resultP}>
        <span>Total Question:</span>
        {totalQestions}
      </p>
      <p className={style.resultP}>
        <span>Total Score:</span>
        {result.score}
      </p>
      <p className={style.resultP}>
        <span className={style.resultCorrectAnawer}>Correct Answer :</span>{" "}
        {result.correctAnswer}
      </p>
      <p className={style.resultP}>
        {" "}
        <span className={style.resultWrongAnawer}>Wrong Answer :</span>{" "}
        {result.wrongAnswer}
      </p>
      <div className={style.quizbuttonContainerFixed}>
        <button className={` ${style.quizbutton}`} onClick={handelTryAgain}>
          Restart Game
        </button>
      </div>

      {!showScore ? (
        <>
          <h3 className={style.resultH3}>
            Enter your name bellow <br /> to save your score!
          </h3>
          <input
            className={` ${
              isMobile ? style.quizChoicesFixed : style.quizChoices
            } `}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className={` ${style.quizbutton} ${style.quizbuttonfixed1}`}
            onClick={handelSave}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                {highScores.map((highscore,i)=>{
                    return ( 
                        <tr key={` ${i}`}>
                            <td>{i+1}</td>
                            <td>{highscore.name}</td>
                            <td>{highscore.score}</td>
                        </tr>
                    )
                })}
              
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Result;
