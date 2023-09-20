import {FunctionComponent} from "react";
import styles from './BrandingMobilePage.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";


const BrandingMobileScreen: FunctionComponent<{setNowPage: setNowPageType}>
    = ({setNowPage}) => {
    return <div className={styles.brandingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <span className={styles.titleWhite}>БРЕНДИНГ</span>
            <span className={styles.littleText}>Разработаем дизайн и стратегию<br/>продвижения ваших товаров и услуг</span>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setNowPage={setNowPage}/>
        </div>
    </div>
}
export default BrandingMobileScreen