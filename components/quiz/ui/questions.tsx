import { useContext, useEffect, useRef, useState } from "react"
import { QuizzContext } from "../context"
import { QuizNextBtn, QuizResetBtn, QuizTitle } from ".."
import { Trash2Icon } from "lucide-react"

export default function Questions() {
    const ref = useRef(null)
    const { currentQuestion, questions, handleAnswser, userAnswers, score, totalScore } = useContext(QuizzContext)
    const { question, answers } = questions[currentQuestion - 1] || {}
    useEffect(() => {
        updateSelectedClass()
    }, [userAnswers[currentQuestion - 1], currentQuestion])
    // Fonction pour mettre à jour la classe CSS
    function updateSelectedClass() {
        ref?.current?.querySelectorAll('li').forEach((item, index) => {

           // if (userAnswers[currentQuestion - 1] === 0) return
            if (index + 1 === userAnswers[currentQuestion - 1]) {
                if (questions[currentQuestion - 1]?.correctAnswer === index + 1) {
                    console.log("isCorrect")
                    item.style.backgroundColor = "rgba(0, 128, 0, .3)"
                    item.style.border = "solid 1px rgba(0, 128, 0, .8)"
                } else {
                    console.log("isIncorrect")
                    item.style.backgroundColor = "rgba(127, 29, 29, .3)";
                    item.style.border = "solid 1px rgba(127, 29, 29, .8)";
                }
                item.style.color = "white"
            } else {
                item.style.backgroundColor = ""
                item.style.color = ""
                item.style.border = ""
            }
        })
    }

    if (currentQuestion === 0) return <></>
    return (
        <>
            <QuizTitle>{currentQuestion}/{questions.length} - {question}</QuizTitle>
            <ul ref={ref} key={currentQuestion}>
                {answers.map((answer, i) => (
                    <li
                        key={i}
                        className={`nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-400 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:node-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50`}
                        onClick={() => handleAnswser(i + 1)}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
            <div className="nx-flex" style={{ gap: "1rem" }}>
                <QuizNextBtn>Continuer</QuizNextBtn>
                <QuizResetBtn><Trash2Icon /></QuizResetBtn>
                <div className="nx-flex nx-justify-end nx-mt-2 nx-text-2xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100" style={{alignSelf: "center"}}>
                    {score} / {totalScore}
                </div>
            </div>
        </>
    )
}