import {FunctionComponent} from "react";
import styles from './WorkingMobilePage.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";

interface IProps {
    setNowPage: setNowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const WorkingMobilePage: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    return <div className={styles.workingScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <PopUpText str={'РАЗРАБОТКА'} threshold={1} boxClassName={styles.titleWhite}/>
            <PopUpText str={'ПО'} threshold={1} boxClassName={styles.titleGreen}/>
            <PopUpText str={'Создаем уникальные программные'} addDelay={0.02} threshold={1} boxClassName={styles.littleText}/>
            <PopUpText str={'решения для бизнеса'} addDelay={0.02} threshold={1} boxClassName={styles.littleText}/>
        </div>
        <div className={styles.dots}>
            <PopUpText str={'Python'} threshold={1}/>
            <PopUpText str={'PHP'} threshold={1}/>
            <PopUpText str={'Java'} threshold={1}/>
            <PopUpText str={'HTML'} threshold={1}/>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default WorkingMobilePage