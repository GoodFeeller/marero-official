import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from './Branding.module.sass'
import {officialText, setNowPageType} from '../../../../public/staticInfo'
import DiscussButton from "../header/discussButton/DiscussButton";
import PopUpText from "../../special/pop-up-text/PopUpText";

interface IProps {
    setNowPage: setNowPageType
    setPosition:  (value: (((prevState: number) => number) | number)) => void

}
const BrandingScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/BrandingBack-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/BrandingBack.png"
        img.onload = () => setImgSrc("/assets/big-photos/BrandingBack.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}}  className={styles.screenBody}>
        <div>
            <Header setPosition={setPosition} setNowPage={setNowPage} page={'branding'}/>
        </div>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <PopUpText str={'БРЕНДИНГ'} threshold={1} boxClassName={styles.webDesignTitle}/>
                <div className={styles.webDesignText}>
                    <PopUpText str={'Разработаем дизайн и стратегию'} addDelay={0.02} threshold={1}/>
                    <PopUpText str={'продвижения ваших товаров и услуг'} addDelay={0.02} threshold={1}/>
                </div>
                <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
            </div>
            <div className={styles.bottomText}>
                <PopUpText str={officialText} addDelay={0.02} threshold={1}/>
            </div>
        </div>
    </div>
}
export default BrandingScreen