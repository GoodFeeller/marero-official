import {FunctionComponent, useEffect, useState} from "react";
import Header from "../header/Header";
import styles from './WorkingPageScreen.module.sass'
import DiscussButton from "../header/discussButton/DiscussButton";
import {setNowPageType} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";
interface IProps {
    setNowPage: setNowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
}
const WorkingPageScreen: FunctionComponent<IProps> = ({setNowPage, setPosition}) => {
    const [imgSrc, setImgSrc] = useState<string>("/assets/big-photos/workingBack-small.png")
    useEffect( () => {
        const img = new Image()
        img.src = "/assets/big-photos/workingBack.png"
        img.onload = () => setImgSrc("/assets/big-photos/workingBack.png")
    })
    return <div style={{  backgroundImage: 'url("' + imgSrc + '")'}} className={styles.screenBody}>
        <Header setPosition={setPosition} setNowPage={setNowPage} page={'working'}/>
        <div className={styles.screenContent}>
            <div className={styles.screenTitle}>
                <div className={styles.webDesignTitle}>
                    <PopUpText str={'РАЗРАБОТКА'} threshold={1}/>
                    <PopUpText str={'ПРОГРАММНОГО'} threshold={1}/>
                    <PopUpText str={'ОБЕСПЕЧЕНИЯ'} threshold={1}/>
                </div>
                <PopUpText str={'Создаем уникальные программные решения для бизнеса'} threshold={1} boxClassName={styles.webDesignText} addDelay={0.01}/>
                <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
            </div>
            <div className={styles.dots}>
                <PopUpText str={'Python'} threshold={1}/>
                <PopUpText str={'PHP'} threshold={1}/>
                <PopUpText str={'Java'} threshold={1}/>
                <PopUpText str={'HTML'} threshold={1}/>
                <PopUpText str={'И др.'} threshold={1}/>
            </div>
        </div>
    </div>
}
export default WorkingPageScreen