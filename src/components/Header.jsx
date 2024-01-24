import LogoImg from '../assets/quiz-logo.png';

export default function Header(){
    return (
        <header>
            <img src={LogoImg} alt ="quiz logo"  />
            <h1> QUIZ </h1>
        </header>
    )
}