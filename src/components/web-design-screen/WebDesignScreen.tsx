import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './WebDesignScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../public/staticInfo";
const WebDesignScreen: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <div className={styles.screenBody}>
        <div className={styles.screenContent}>
            <Header setNowPage={setNowPage} page={'design'}/>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>ВЕБ-ДИЗАЙН</span>
                <span className={styles.webDesignText}>Разрабатываем сайты,которые помогут вам продавать больше</span>
                <DiscussButton setNowPage={setNowPage}/>
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