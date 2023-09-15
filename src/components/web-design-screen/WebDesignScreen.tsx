import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './WebDesignScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
const WebDesignScreen: FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <div className={styles.screenBody}>
        <div className={styles.screenContent}>
            <Header setDiscuss={setDiscuss} page={'design'}/>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>ВЕБ-ДИЗАЙН</span>
                <span className={styles.webDesignText}>Разрабатываем сайты,которые помогут вам продавать больше</span>
                <DiscussButton setDiscuss={setDiscuss}/>
            </div>
            <div className={styles.dots}>
                <span>Figma</span>
                <span>Tilda</span>
                <span>Adobe XD</span>
                <span>Webflow</span>
            </div>
        </div>
    </div>
}
export default WebDesignScreen