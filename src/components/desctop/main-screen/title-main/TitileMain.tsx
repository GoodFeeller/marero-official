import {FunctionComponent} from "react";
import styles from '../MainScreen.module.sass'
import PopUpText from "../../../special/pop-up-text/PopUpText";

const TitleMain:FunctionComponent = () => {
    return <div className={styles.title}>
        <PopUpText str={'ЯРКИЕ'} threshold={1} className={styles.titleGreen}/>
        <PopUpText str={'РЕШЕНИЯ ДЛЯ'} threshold={1} className={styles.titleWhite}/>
        <PopUpText str={'УЛУЧШЕНИЙ'} threshold={1} className={styles.titleWhite}/>
    </div>
}
export default TitleMain;