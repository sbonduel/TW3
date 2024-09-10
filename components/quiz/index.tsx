import { LiHTMLAttributes, ReactNode, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import QuizzRoot, { QuizzContext } from "./context";
import QuizzIntro from "./ui/intro";
import Questions from "./ui/questions";

export default function Quizz({ quizData }) {
    const { currentQuestion } = useContext(QuizzContext)
    return <QuizzRoot quizData={quizData} >
        <QuizzIntro />
        <Questions />
    </QuizzRoot>
}

export function QuizTitle({ children }: { children: ReactNode }) {
    return <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-pb-1 nx-text-3xl" style={{ userSelect: "none" }}>{children}</h2>
}

export function QuizParagraph({ children }: { children: ReactNode }) {
    return <p className="nx-mt-6 nx-leading-7 first:nx-mt-0" style={{ userSelect: "none" }}>{children}</p>
}

export function QuizButton({ children, ...attrs }: { children: ReactNode, onClick: () => void }) {
    return <button className="nx-mt-4 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-white nx-font-semibold nx-text-white dark:nx-bg-white/10 dark:nx-text-white contrast-more:nx-border-white contrast-more:dark:nx-border-white" {...attrs} style={{ userSelect: "none" }}>{children}</button>
}

export function QuizNextBtn({ children }: { children: ReactNode }) {
    const ref = useRef(null)
    const { nextQuestion, userAnswers, currentQuestion } = useContext(QuizzContext)
    function disabledBtnClass() {
        if (userAnswers[currentQuestion - 1] === 0) {
            console.log("disabledBtnClass()")
            ref.current.style.backgroundColor = "rgba(127, 29, 29, .3)";
            ref.current.style.border = "solid 1px rgba(127, 29, 29, .8)";
            ref.current.style.color = "white"
            ref.current.style.cursor = "not-allowed"
        } else {
            ref.current.style.backgroundColor = ""
            ref.current.style.color = ""
            ref.current.style.border = ""
            ref.current.style.cursor = ""
        }
    }
    useEffect(() => {
        disabledBtnClass()
    }, [userAnswers, currentQuestion])
    return <button ref={ref} style={{ userSelect: "none"}} disabled={userAnswers[currentQuestion - 1] === 0} className="nx-mt-4 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-100 nx-font-semibold nx-text-white dark:nx-bg-primary-100/10 dark:nx-text-black contrast-more:nx-border-white contrast-more:dark:nx-border-white" onClick={nextQuestion}>{children}</button>
}
export function QuizResetBtn({ children }: { children: ReactNode }) {
    const { handleAnswser, userAnswers, currentQuestion } = useContext(QuizzContext)
    return <button
        // disabled={userAnswers[currentQuestion - 1] === 0} 
        className="nx-mt-4 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => handleAnswser(0)}>{children}</button>
}
export function QuizResetAllBtn({ children }: { children: ReactNode }) {
    return <button
        className="nx-mt-4 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => window.location.reload()}>{children}</button>
}
