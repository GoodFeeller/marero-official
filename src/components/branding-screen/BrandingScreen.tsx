import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './Branding.module.sass'
import { officialText } from '../../../public/staticInfo'
import DiscussButton from "../header/discussButton/DiscussButton";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
const BrandingScreen: FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <div className={styles.screenBody}>
        <div className={styles.screenContent}>
            <Header setDiscuss={setDiscuss} page={'branding'}/>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>БРЕНДИНГ</span>
                <span className={styles.webDesignText}>Разрабатываем сайты,которые помогут вам продавать больше</span>
                <DiscussButton setDiscuss={setDiscuss}/>
            </div>
            <div className={styles.bottomText}>
                <span>{officialText}</span>
            </div>
        </div>
    </div>
}
export default BrandingScreen