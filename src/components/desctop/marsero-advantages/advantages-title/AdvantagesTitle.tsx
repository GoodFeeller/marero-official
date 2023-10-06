import {FunctionComponent, memo} from "react";
import styles from "../MarseroAdvantages.module.sass";
import PopUpText from "../../../special/pop-up-text/PopUpText";

const AdvantagesTitle: FunctionComponent = () => {
    return <div className={styles.advantagesTitleBox}>
        <div/>
        <div className={styles.advantagesTitleContent}>
            <div>
                <PopUpText str={'ПРЕИМУЩЕСТВА'} threshold={1} className={styles.advantagesBigTitle}/>
                <PopUpText str={'MARSERO'} threshold={1} className={styles.advantagesBigTitle}/>
            </div>
            <div>
                <PopUpText str={'Уникальные '} threshold={1} className={styles.green + ' ' + styles.advantagesLittleTitle} addDelay={0.01}/>
                <PopUpText str={'решения. '} threshold={1} className={styles.advantagesLittleTitle} startDelay={0.1} addDelay={0.01}/>
                <PopUpText str={'Уникальная '} threshold={1} className={styles.green + ' ' + styles.advantagesLittleTitle} startDelay={0.18} addDelay={0.01}/>
                <PopUpText str={'эффективность.'} threshold={1} className={styles.advantagesLittleTitle} addDelay={0.01} startDelay={0.28}/>
            </div>
        </div>
    </div>
}
export default memo(AdvantagesTitle)