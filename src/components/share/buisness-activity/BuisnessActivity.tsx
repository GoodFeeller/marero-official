import {FunctionComponent} from "react";
import styles from './BuisnessActivity.module.sass'
import PopUpText from "../../special/pop-up-text/PopUpText";
import {useInView} from "react-intersection-observer";

const BuisnessActivity: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const {ref, inView} = useInView({
        threshold: 0.2
    })
    return <div className={styles.buisnessBody}>
        <div className={styles.buisnessContent}>
            <div className={styles.titleBody}>
                <span className={styles.littleTitle}>/Категории услуг</span>
                <span className={styles.bigTitle}>ВОЗМОЖНОСТИ<br/>ДЛЯ БИЗНЕСА</span>
            </div>
            {isMobile
                ?
                <div className={styles.infoBox}>
                    <div className={styles.infoBlock}>
                        <div>
                            <PopUpText str={'Дизайн логотипа'} addDelay={0.02} threshold={0.5}/>
                        </div>
                        <div>
                            <PopUpText str={'Дизайн упаковки'} addDelay={0.02} threshold={0.5}/>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Разработка'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'фирменного стиля'} addDelay={0.02} threshold={0.5}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Оформление'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'пространств'} addDelay={0.02} threshold={0.5}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Разработка'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'брендинга'} addDelay={0.02} threshold={0.5}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Дизайн'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'интерфейсов'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'и WEB'} addDelay={0.02} threshold={0.5}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div>
                            <PopUpText str={'Дизайн этикетки'} addDelay={0.02} threshold={0.5}/>
                        </div>
                        <div>
                            <PopUpText str={'Ребрендинг'} addDelay={0.02} threshold={0.5}/>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Инфографика'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'и анимация'} addDelay={0.02} threshold={0.5}/>

                            </div>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Корпоративный'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'брендинг'} addDelay={0.02} threshold={0.5}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Разработка'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'дизайн-стратегии'} addDelay={0.02} threshold={0.5}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <PopUpText str={'Фудстайлинг'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'и рекламная'} addDelay={0.02} threshold={0.5}/>
                                <PopUpText str={'фотосъемка'} addDelay={0.02} threshold={0.5}/>

                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.infoBox}>
                    <div className={styles.infoBlock}>
                        <PopUpText str={'Дизайн упаковки'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Дизайн этикетки'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Фудстайлинг и рекламная фотосъемка'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Инфографика и анимация'} addDelay={0.02} threshold={0.5}/>
                    </div>
                    <div className={styles.infoBlock}>
                        <PopUpText str={'Корпоративный брендинг'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Ребрендинг'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Разработка дизайн-стратегии'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Разработка фирменного стиля'} addDelay={0.02} threshold={0.5}/>
                    </div>
                    <div className={styles.infoBlock}>
                        <PopUpText str={'Оформление пространств'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Дизайн интерфейсов и WEB'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Дизайн логотипа'} addDelay={0.02} threshold={0.5}/>
                        <PopUpText str={'Разработка брендбука'} addDelay={0.02} threshold={0.5}/>
                    </div>
                </div>
            }
        </div>
        <div ref={ref} className={inView ? styles.linesBlock + ' ' + styles.animateBack : styles.linesBlock}>
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