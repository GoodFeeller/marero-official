import {FunctionComponent, memo} from "react";
import styles from "../Steps.module.sass";
import PopUpText from "../../../special/pop-up-text/PopUpText";

const StepsTitle: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.stepsTitle}>
        {
            page == 'about-mobile'
                ?
                <PopUpText str={'ЦЕННОСТИ'} threshold={1} className={styles.titleBig}/>
                :
                <div>
                    <div>
                        <PopUpText str={'/Этапы работы'} threshold={1} boxClassName={styles.titleLittle}/>
                    </div>
                    <div>
                        <PopUpText str={'ПРОЗРАЧНЫЕ'} threshold={1} boxClassName={styles.titleBig}/>
                        <PopUpText str={'ЭТАПЫ РАБОТЫ'} threshold={1} boxClassName={styles.titleBig}/>
                    </div>
                </div>
        }
    </div>
}
export default memo(StepsTitle)