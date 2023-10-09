import {FunctionComponent} from "react";
import styles from './Value.module.sass'
import PopUpText from "../../special/pop-up-text/PopUpText";
import {useInView} from "react-intersection-observer";

const Value: FunctionComponent = () => {
    const {ref, inView} = useInView({
        threshold: 0.2
    })
    return <div ref={ref} className={inView ? styles.valueBody  + ' ' + styles.animateLine : styles.valueBody}>
        <PopUpText str={'/Ценности'} threshold={1} boxClassName={styles.title}/>
        <PopUpText str={'РЕПУТАЦИЯ'} threshold={1} boxClassName={styles.bigText}/>
        <div className={styles.littleText}>
            <PopUpText str={'Каждый сотрудник компании MARSERO осознает долю своей'} addDelay={0.01} threshold={1}/>
            <PopUpText str={'личной ответственности перед клиентом, поэтому делает все,'} addDelay={0.01} threshold={1}/>
            <PopUpText str={'чтобы достигнуть наилучшего результата.'} addDelay={0.01} threshold={1} />
        </div>
        <PopUpText str={'НАДЕЖНОСТЬ'} threshold={1} boxClassName={styles.bigText}/>
        <div className={styles.littleText}>
            <PopUpText str={'Строгое соблюдение контракта и внутренний контроль качества'} addDelay={0.01} threshold={1}/>
            <PopUpText str={'продукта является гарантом своевременной поставки.'} addDelay={0.01} threshold={1}/>
        </div>
        <PopUpText str={'БЕРЕЖЛИВОСТЬ'} threshold={1} boxClassName={styles.bigText}/>
        <div className={styles.littleText}>
            <PopUpText str={'Мы заботимся о росте бизнеса наших клиентов, так как это залог'} addDelay={0.01} threshold={1}/>
            <PopUpText str={'роста и нашей компании.'} addDelay={0.01} threshold={1}/>
        </div>
        <PopUpText str={'ЛОЯЛЬНОСТЬ'} threshold={1} boxClassName={styles.bigText}/>
        <div className={styles.littleText}>
            <PopUpText str={'Мы прислушиваемся ко всем вашим пожеланиям и адаптируем'} addDelay={0.01} threshold={1}/>
            <PopUpText str={'процессы в соответствии с запросами вашего бизнеса.'} addDelay={0.01} threshold={1}/>
        </div>
        <div className={styles.firstLine}/>
        <div className={styles.secondLine}/>
        <div className={styles.firstDot}/>
        <div className={styles.secondDot}/>
        <div className={styles.thirdDot}/>
        <div className={styles.fourthDot}/>
    </div>
}
export default Value