import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './WorkingPageScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
const WorkingPageScreen: FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <div className={styles.screenBody}>
        <div className={styles.screenContent}>
            <Header setDiscuss={setDiscuss} page={'working'}/>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>РАЗРАБОТКА<br/>ПРОГРАММНОГО<br/>ОБЕСПЕЧЕНИЯ</span>
                <span className={styles.webDesignText}>Создаем уникальные программные решения для бизнеса</span>
                <DiscussButton setDiscuss={setDiscuss}/>
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