import {FunctionComponent, memo} from "react";
import styles from "../Steps.module.sass";

const StepsTitle: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.stepsTitle}>
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
}
export default memo(StepsTitle)