import {FunctionComponent} from "react";
import styles from './WorkingMobilePage.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";


const WorkingMobilePage: FunctionComponent<{setNowPage: setNowPageType}>
    = ({setNowPage}) => {
    return <div className={styles.workingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleWhite}>РАЗРАБОТКА</span>
            <span className={styles.titleGreen}>ПО</span>
            <span className={styles.littleText}>Создаем уникальные программные<br/>решения для бизнеса</span>
        </div>
        <div className={styles.dots}>
            <span>Python</span>
            <span>PHP</span>
            <span>Java</span>
            <span>HTML</span>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setNowPage={setNowPage}/>
        </div>
    </div>
}
export default WorkingMobilePage