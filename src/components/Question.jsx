import QuizTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import Questions from '../questions.js';

export default function Question({index, onSelectAnswer, onSkipAnswer }) {

    const [answer, setAnswer] =  useState({
        selectedAnswer:'',
        isCorrect : null
    })

    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }

    if(answer.isCorrect !== null){

        timer = 2000;

    }

    function handleSelectAnswer(answer) {

        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer:answer,
                isCorrect:Questions[index].answers[0] === answer
            })


            setTimeout(()=>{
                onSelectAnswer(answer);
            }, 2000);

        }  , 1000);

    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
         answerState = answer.isCorrect ? 'correct' : 'wrong';
       } else if( answer.answerState) {
           answerState = 'answered';
       } else if (answer.answerState) {
    ({ answer, answerState: 'answered' });
      }

    return (
        <div id="question">
        <QuizTimer
         key ={timer}
         timeout={timer} 
         mode = {answerState}
        onTimeout = {answer.selectedAnswer === '' ?  onSkipAnswer : null } />

  <h2> {Questions[index].text} </h2>
    <Answers
      answers = {Questions[index].answers}
      selectedAnswer={answer.selectedAnswer}
      answerState = {answerState}
      onSelect={handleSelectAnswer} />
 
    
    </div>
    )
}