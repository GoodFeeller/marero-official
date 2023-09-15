import {FunctionComponent} from "react";
import styles from './Steps.module.sass'
import {workSteps, workStepsDesignPage} from '../../../public/staticInfo'
const Steps: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.stepsBody}>

        <div className={styles.stepsTitle}>
            <span className={styles.titleLittle}>/Этапы работы</span>
            <span className={styles.titleBig}>ПРОЗРАЧНЫЕ<br/>ЭТАПЫ РАБОТЫ</span>
        </div>
        <div className={styles.stepScrollBox}>

            {page == 'main-page'
                ?
                workSteps.map( (s, index) => <div
                    key={index}
                    className={styles.step}
                >
                <span>{s.id}</span>
                <span>{s.title}</span>
                <span>{s.text}</span>
                </div>)
                :
                workStepsDesignPage.map( (s, index) => <div
                    key={index}
                    className={styles.step}
                >
                    <span>{s.id}</span>
                    <span>{s.title}</span>
                    <span>{s.text}</span>
                </div>)
            }

        </div>
    </div>
}
export default Steps;