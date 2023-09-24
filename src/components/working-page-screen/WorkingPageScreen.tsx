import {FunctionComponent} from "react";
import Header from "../header/Header";
import styles from './WorkingPageScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../public/staticInfo";
interface IProps {
    setNowPage: setNowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const WorkingPageScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    return <div className={styles.screenBody}>
        <Header setPosition={setPosition} setNowPage={setNowPage} page={'working'}/>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <span className={styles.webDesignTitle}>РАЗРАБОТКА<br/>ПРОГРАММНОГО<br/>ОБЕСПЕЧЕНИЯ</span>
                <span className={styles.webDesignText}>Создаем уникальные программные решения для бизнеса</span>
                <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
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