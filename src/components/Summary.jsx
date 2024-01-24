import quizCompleteImg from '../assets/quiz-complete.png';

import Questions from '../questions.js';



export default function Summary ({ userAnswers }) {

    const skippedAnswer = userAnswers.filter(answer => answer === null);

    const correctAnswer = userAnswers.filter((answer,index) => answer === Questions[index].answers[0]  );

    const skippedAnswerShare = Math.round( (skippedAnswer.length / userAnswers.length) * 100   ) ;
    const correctAnswerShare = Math.round( (correctAnswer.length / userAnswers.length) * 100   ) ;
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;



    return (
        <div id="summary" >
        <img src={quizCompleteImg} alt="quiz is completed" />
        <h2> Quiz completed </h2>
        <div id='summary-stats'>
            <p>
                <span className="number" > {skippedAnswerShare}% </span>
                <span className="text"> skipped </span>
            </p>
            <p>
                <span className="number" > {correctAnswerShare}% </span>
                <span className="text"> answered correctly </span>
            </p>
            <p>
                <span className="number" > {wrongAnswerShare}% </span>
                <span className="text"> answered incorrectly </span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {

                let cssClass = 'user-answer';

                if(answer === null){
                    cssClass += ' skipped'
                } else if ( answer === Questions[index].answers[0] ) {
                    cssClass += ' correct'
                } else {
                    cssClass += ' wrong'
                }

                return (

                    <li key ={index} >
                    <h3>{index + 1}</h3>
                    <p className='question'> {Questions[index].text}</p>
                    <p className="user-answer"> { answer ?? 'skipped' }  </p> 
                </li>

                )
            } )}
     
        </ol>

    </div>
    )

}