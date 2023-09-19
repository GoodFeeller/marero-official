import {FunctionComponent} from "react";
import styles from './MainScreenMobile.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
type setPageChangerType = (value: (((prevState: boolean) => boolean) | boolean)) => void


const MainScreenMobile: FunctionComponent<{setDiscuss: setDiscussType, setPageChanger: setPageChangerType}>
    = ({setDiscuss, setPageChanger}) => {
    return <div className={styles.mainScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setPageChanger={setPageChanger}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleGreen}>ЯРКИЕ</span>
            <span className={styles.titleWhite}>РЕШЕНИЯ ДЛЯ</span>
            <span className={styles.titleWhite}>УЛУЧШЕНИЙ</span>
        </div>
        <div className={styles.linesBox}>
            <div className={styles.linesBoxContent}>
                <span>Разработка игр</span>
                <span>Визуальная решения</span>
                <span>Web-desgin</span>
                <span>Разработка ПО</span>

            </div>
            <div className={styles.horizLine}/>
            <div className={styles.vertLine}/>
            <div className={styles.dot}/>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setDiscuss={setDiscuss}/>
        </div>
    </div>
}
export default MainScreenMobile