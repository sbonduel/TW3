import { createContext, ReactNode, useMemo, useState } from "react";
import { Question, QuizStructure } from "./type";

type QuizzContextProps = {
    currentQuestion: number;
    score: number;
    totalScore: number;
    userAnswers?: number[];
    quizTitle?: ReactNode;
    quizSynopsis?: ReactNode;
    questions?: Question[];
    nextQuestion?: () => void;
    handleAnswser?: (number) => void;
}
export const QuizzContext = createContext<QuizzContextProps>({ currentQuestion: 0, score: 0, totalScore: 0 })

export default function QuizzRoot({ children, quizData }: { children: ReactNode, quizData: QuizStructure }) {
    // currentQuestion est 0 pour permettre de savoir quand le quizz est commencé (0 == false)
    // const questions = quizData.questions || []
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [questions, setQuestions] = useState(quizData.questions || [])
    const [userAnswers, setUserAnswers] = useState<number[]>(new Array(questions.length).fill(0))
    const score = useMemo(() => {
        let calculScore = 0;
        questions.forEach((question, i) => {
            if (userAnswers[i] !== 0 && question.correctAnswer === userAnswers[i]) {
                calculScore += question.point
            }
        })
        return calculScore
    }, [userAnswers])
    const totalScore = useMemo(() => {
        let calculTotal = 0;
        questions.forEach((question, i) => {
            calculTotal += question.point
        })
        return calculTotal
    }, [userAnswers])
    const { quizTitle, quizSynopsis } = quizData
    function nextQuestion() {
        setCurrentQuestion(prev => ++prev % (questions.length + 1))
    }

    async function handleAnswser(num: number) {
        setUserAnswers(prev => {
            prev[currentQuestion - 1] = num;
            // destructurer l'objet pour permettre la détection du changement de l'objet. (useEffect [userAnswers])
            return [...prev]
        })
    }
    return (
        <QuizzContext.Provider value={{ currentQuestion, nextQuestion, handleAnswser, questions, quizTitle, quizSynopsis, userAnswers, score, totalScore }}>{children}</QuizzContext.Provider>
    )
}