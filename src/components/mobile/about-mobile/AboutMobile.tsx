import {FunctionComponent} from "react";
import styles from './AboutMobile.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {officialText, setNowPageType} from "../../../../public/staticInfo";
interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}


const AboutMobile: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    return <div className={styles.aboutScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleBig}>О НАС</span>
            <span className={styles.titleLittle}>Разрабатываем сайты,которые помогут<br/>вам продавать больше</span>
        </div>
        <div className={styles.linesBox}>
            <div className={styles.linesBoxContent}>
                <span>Разработка игр</span>
                <span>Визуальные решения</span>
                <span>Web-desgin</span>
                <span>Разработка ПО</span>

            </div>
            <div className={styles.horizLine}/>
            <div className={styles.vertLine}/>
            <div className={styles.dot}/>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
        <div className={styles.officialText}>
            {officialText}
        </div>
    </div>
}
export default AboutMobile