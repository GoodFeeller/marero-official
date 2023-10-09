import {FunctionComponent} from "react";
import styles from './AboutMobile.module.sass'
import DiscussMobileButton from './../discussButtonMobile/DiscussMobileButton';
import HeaderMobile from "../header-mobile/HeaderMobile";
import {officialText, setNowPageType} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";
import {useInView} from "react-intersection-observer";
interface IProps {
    setNowPage: setNowPageType
    setPosition: (value: (((prevState: number) => number) | number)) => void
}


const AboutMobile: FunctionComponent<IProps>
    = ({setNowPage, setPosition}) => {
    const {ref, inView} = useInView({
        threshold: 0.2
    })
    return <div className={styles.aboutScreenBody}>
        <div className={styles.headerBox}>
            <HeaderMobile setNowPage={setNowPage}/>
        </div>
        <div className={styles.titleBox}>
            <PopUpText str={'О НАС'} threshold={1} boxClassName={styles.titleBig}/>
            <PopUpText str={'Разрабатываем сайты,которые помогут'} addDelay={0.01} boxClassName={styles.titleLittle} threshold={1}/>
            <PopUpText str={'вам продавать больше'} addDelay={0.01} boxClassName={styles.titleLittle} threshold={1}/>
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
        <PopUpText str={officialText} addDelay={0.02} threshold={1} boxClassName={styles.officialText}/>

    </div>
}
export default AboutMobile