import { LiHTMLAttributes, ReactNode, useContext, useEffect, useMemo, useState } from "react";
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
    return <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-pb-1 nx-text-3xl">{children}</h2>
}

export function QuizParagraph({ children }: { children: ReactNode }) {
    return <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">{children}</p>
}

export function QuizButton({ children, ...attrs }: { children: ReactNode, onClick: () => void }) {
    return <button className="nx-mt-4 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500" {...attrs}>{children}</button>
}

export function QuizNextBtn({ children }: { children: ReactNode }) {
    const { nextQuestion } = useContext(QuizzContext)

    return <button className="nx-mt-4 nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500" onClick={nextQuestion}>{children}</button>
}
