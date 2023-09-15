import {FunctionComponent} from "react";
import styles from './BuisnessActivity.module.sass'

const BuisnessActivity: FunctionComponent = () => {
    return <div className={styles.buisnessBody}>
        <div className={styles.buisnessContent}>
            <div className={styles.titleBody}>
                <span className={styles.littleTitle}>/Категории услуг</span>
                <span className={styles.bigTitle}>ВОЗМОЖНОСТИ<br/>ДЛЯ БИЗНЕСА</span>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBlock}>
                    <span>Дизайн упаковки</span>
                    <span>Дизайн этикетки</span>
                    <span>Фудстайлинг и рекламная фотосъемка</span>
                    <span>Инфографика и анимация</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Корпоративный брендинг</span>
                    <span>Ребрендинг</span>
                    <span>Разработка дизайн-стратегии</span>
                    <span>Разработка фирменного стиля</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Оформление пространств</span>
                    <span>Дизайн интерфейсов и WEB</span>
                    <span>Дизайн упаковки</span>
                    <span>Разработка брендбука</span>
                </div>
            </div>
        </div>
        <div className={styles.linesBlock}>
            <div>
                <div className={styles.firstLine}/>
                <div className={styles.secondLine}/>
                <div className={styles.thirdLine}/>
                <img src={'/assets/whiteDot.svg'} className={styles.firstDot}/>
                <img src={'/assets/whiteDot.svg'} className={styles.secondDot}/>
                <img src={'/assets/whiteDot.svg'} className={styles.thirdDot}/>
            </div>
        </div>
    </div>
}
export default BuisnessActivity;