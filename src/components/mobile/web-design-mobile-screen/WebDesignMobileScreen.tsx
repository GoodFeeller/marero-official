import {FunctionComponent} from "react";
import styles from './WebDesignMobileScreen.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";

interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}

const WebDesignMobileScreen: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    return <div className={styles.workingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <PopUpText str={'ВЕБ-ДИЗАЙН'} boxClassName={styles.titleWhite} threshold={1}/>
            <PopUpText str={'Разрабатываем сайты,которые помогут'} addDelay={0.02} boxClassName={styles.littleText} threshold={1}/>
            <PopUpText str={'вам продавать больше'} addDelay={0.02} boxClassName={styles.littleText} threshold={1}/>
        </div>
        <div className={styles.dots}>
            <PopUpText str={'Figma'} threshold={1}/>
            <PopUpText str={'Tilda'} threshold={1}/>
            <PopUpText str={'Adobe XD'} threshold={1}/>
            <PopUpText str={'Webflow'} threshold={1}/>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default WebDesignMobileScreen