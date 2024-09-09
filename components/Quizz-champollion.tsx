import Quiz from 'react-quiz-component';
import styles from "./styles.module.scss"

export default function QuizzChampollion({ quiz }: { quiz: any }) {
    return <section className={styles.container}>
        <Quiz quiz={quiz} />
    </section>
}