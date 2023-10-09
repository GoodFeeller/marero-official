import {FunctionComponent} from "react";
import styles from './BrandingMobilePage.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";

interface IProps {
    setNowPage: setNowPageType,
    setPosition:  (value: (((prevState: number) => number) | number)) => void

}
const BrandingMobileScreen: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    return <div className={styles.brandingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <PopUpText str={'БРЕНДИНГ'} threshold={1} boxClassName={styles.titleWhite}/>
            <PopUpText str={'Разработаем дизайн и стратегию'} threshold={1} boxClassName={styles.littleText}/>
            <PopUpText str={'продвижения ваших товаров и услуг'} threshold={1} boxClassName={styles.littleText}/>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default BrandingMobileScreen