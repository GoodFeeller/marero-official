import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from './WebDesignScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";
interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const WebDesignScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/designScreenBack-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/designScreenBack.png"
        img.onload = () => setImgSrc("/assets/big-photos/designScreenBack.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.screenBody}>
        <div>
            <Header setPosition={setPosition} setNowPage={setNowPage} page={'design'}/>
        </div>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <PopUpText str={'ВЕБ-ДИЗАЙН'} threshold={1} boxClassName={styles.webDesignTitle}/>
                <div className={styles.webDesignText}>
                    <PopUpText str={'Разрабатываем сайты,которые помогут'} addDelay={0.02} threshold={1} />
                    <PopUpText str={'вам продавать больше'} addDelay={0.02} threshold={1}/>

                </div>
                <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
            </div>
            <div className={styles.dots}>
                <PopUpText str={'Figma'} threshold={1}/>
                <PopUpText str={'Tilda'} threshold={1}/>
                <PopUpText str={'Adobe XD'} threshold={1}/>
                <PopUpText str={'Webflow'} threshold={1}/>

            </div>
        </div>
    </div>
}
export default WebDesignScreen