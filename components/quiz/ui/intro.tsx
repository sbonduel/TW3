import { useContext } from "react"
import { QuizzContext } from "../context"
import { QuizParagraph, QuizTitle, QuizNextBtn } from ".."

export default function QuizzIntro() {
    const { score, totalScore, quizTitle, quizSynopsis, currentQuestion } = useContext(QuizzContext)
    if (currentQuestion !== 0) return <div className="nx-flex nx-justify-end nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
        {score} / {totalScore}
    </div>
    return (<>
        <QuizTitle>{quizTitle}</QuizTitle>
        <QuizParagraph>{quizSynopsis}</QuizParagraph>
        <QuizNextBtn>Commencer !</QuizNextBtn>
    </>)
}