import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './Branding.module.sass'
import {officialText, setNowPageType} from '../../../public/staticInfo'
import DiscussButton from "../header/discussButton/DiscussButton";
const BrandingScreen: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <div className={styles.screenBody}>
        <div className={styles.screenContent}>
            <Header setNowPage={setNowPage} page={'branding'}/>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>БРЕНДИНГ</span>
                <span className={styles.webDesignText}>Разрабатываем сайты,которые помогут вам продавать больше</span>
                <DiscussButton setNowPage={setNowPage}/>
            </div>
            <div className={styles.bottomText}>
                <span>{officialText}</span>
            </div>
        </div>
    </div>
}
export default BrandingScreen