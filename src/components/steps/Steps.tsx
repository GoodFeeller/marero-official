import {FunctionComponent} from "react";
import styles from './Steps.module.sass'
import {valuesList, workSteps, workStepsDesignPage, workStepsWorkingPage} from '../../../public/staticInfo'
const Steps: FunctionComponent<{page: string, isMobile: boolean}> = ({page, isMobile}) => {
    const stepList = page == 'main-page' ? workSteps :
        page == 'about-mobile' ? valuesList : page == 'working' || page == 'working-mobile' ? workStepsWorkingPage : workStepsDesignPage
    return <div className={page == 'working-mobile' || (page == 'design' && isMobile) ? styles.stepsBody + ' ' + styles.workingBack : styles.stepsBody }>
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

            {
                stepList.map( (s, index) => <div
                    key={index}
                    className={page == 'about-mobile' ? styles.stepAbout : page == 'working' ? styles.workingStep :  styles.step}
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