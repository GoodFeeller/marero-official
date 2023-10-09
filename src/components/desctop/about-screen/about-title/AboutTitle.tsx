import {FunctionComponent} from "react";
import styles from '../AboutScreen.module.sass'
import PopUpText from "../../../special/pop-up-text/PopUpText";

const AboutTitle:FunctionComponent = () => {
    return <div className={styles.title}>
        <PopUpText str={'О НАС'} threshold={1} className={styles.titleBig}/>
        <PopUpText str={'Разрабатываем проекты, которые помогут'} threshold={1} addDelay={0.015} className={styles.titleLittle}/>
        <PopUpText str={'вам продавать больше'} addDelay={0.015} threshold={1} className={styles.titleLittle}/>
    </div>
}
export default AboutTitle;