import {FunctionComponent, useEffect, useState} from "react";
import styles from './MainScreenMobile.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {setNowPageType} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";
import {useInView} from "react-intersection-observer";


interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const MainScreenMobile: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/MobileMainScreen-small.png")
    const {ref, inView} = useInView({
        threshold: 0.2
    })
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/MobileMainScreen.png"
        img.onload = () => setImgSrc("/assets/big-photos/MobileMainScreen.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.mainScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <PopUpText str={'ЯРКИЕ'} threshold={1} boxClassName={styles.titleGreen}/>
            <PopUpText str={'РЕШЕНИЯ ДЛЯ'} threshold={1} boxClassName={styles.titleWhite}/>
            <PopUpText str={'УЛУЧШЕНИЙ'} threshold={1} boxClassName={styles.titleWhite}/>
        </div>
        <div ref={ref} className={inView ? styles.linesBox + ' ' + styles.animated : styles.linesBox}>
            <div className={styles.linesBoxContent}>
                <PopUpText str={'Разработка игр'} threshold={1} addDelay={0.02}/>
                <PopUpText str={'Визуальные решения'} threshold={1} addDelay={0.02}/>
                <PopUpText str={'Web-desgin'} threshold={1} addDelay={0.02}/>
                <PopUpText str={'Разработка ПО'} threshold={1} addDelay={0.02}/>
            </div>
            <div className={styles.horizLine}/>
            <div className={styles.vertLine}/>
            <div className={styles.dot}/>
        </div>
        <div className={styles.discussBtnBox}>
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
        </div>
    </div>
}
export default MainScreenMobile