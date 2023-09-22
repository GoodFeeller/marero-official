import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './WorkingPageScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../public/staticInfo";
const WorkingPageScreen: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <div className={styles.screenBody}>
        <Header setNowPage={setNowPage} page={'working'}/>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>РАЗРАБОТКА<br/>ПРОГРАММНОГО<br/>ОБЕСПЕЧЕНИЯ</span>
                <span className={styles.webDesignText}>Создаем уникальные программные решения для бизнеса</span>
                <DiscussButton setNowPage={setNowPage}/>
            </div>
            <div className={styles.dots}>
                <span>Python</span>
                <span>PHP</span>
                <span>Java</span>
                <span>HTML</span>
                <span>И др.</span>
            </div>
        </div>
    </div>
}
export default WorkingPageScreen