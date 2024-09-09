import { ReactNode } from 'react';

type QuestionType = "text" | "photo"

type AnswerSelectionType = "single" | "multiple"

export type Question = {
    question: ReactNode
    questionType: QuestionType
    questionPic?: string
    answers: ReactNode[]
    correctAnswer: number | number[]
    answerSelectionType: AnswerSelectionType
    messageForCorrectAnswer?: ReactNode
    messageForIncorrectAnswer?: ReactNode
    explanation?: ReactNode
    point?: number
    segment?: string
}

export type QuizStructure = {
    quizTitle: ReactNode
    quizSynopsis: ReactNode
    questions: Question[]
}

export type QuizProps = {
    quiz: QuizStructure;
    disableSynopsis?: boolean;
    shuffleAnswer?: boolean;
    shuffle?: boolean;
    showDefaultResult?: boolean;
    showInstantFeedback?: boolean;
    continueTillCorrect?: boolean;
    timer?: number;
    allowPauseTimer?: boolean
}

// const Quiz: (props: QuizProps) => ReactElement;
