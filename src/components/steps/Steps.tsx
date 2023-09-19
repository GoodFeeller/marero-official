import {FunctionComponent} from "react";
import styles from './Steps.module.sass'
import {valuesList, workSteps, workStepsDesignPage} from '../../../public/staticInfo'
const Steps: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={page == 'working-mobile' || page == 'design' ? styles.stepsBody + ' ' + styles.workingBack : styles.stepsBody }>
        <div className={styles.stepsTitle}>
            {
                page == 'about-mobile'
                ?
                    <span className={styles.titleBig}>ЦЕННОСТИ</span>
                    :
                    <div>
                        <span className={styles.titleLittle}>/Этапы работы</span>
                        <span className={styles.titleBig}>ПРОЗРАЧНЫЕ<br/>ЭТАПЫ РАБОТЫ</span>
                    </div>
            }
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
                page == 'about-mobile'
                    ?
                    valuesList.map( (s, index) => <div
                        key={index}
                        className={styles.stepAbout}
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