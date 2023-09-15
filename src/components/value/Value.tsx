import {FunctionComponent} from "react";
import styles from './Value.module.sass'

const Value: FunctionComponent = () => {
    return <div className={styles.valueBody}>
        <span className={styles.title}>/Ценности</span>
        <span className={styles.bigText}>РЕПУТАЦИЯ</span>
        <span className={styles.littleText}>Каждый сотрудник компании MARSERO осознает долю своей личной
            ответственности перед клиентом, поэтому делает все, чтобы достигнуть наилучшего результата.
        </span>
        <span className={styles.bigText}>НАДЕЖНОСТЬ</span>
        <span className={styles.littleText}>
            Строгое соблюдение контракта и внутренний контроль качества продукта является гарантом своевременной поставки.
        </span>
        <span className={styles.bigText}>БЕРЕЖЛИВОСТЬ</span>
        <span className={styles.littleText}>Мы заботимся о росте бизнеса наших клиентов, так как это залог роста и нашей компании.</span>
        <span className={styles.bigText}>ЛОЯЛЬНОСТЬ</span>
        <span className={styles.littleText}>Мы прислушиваемся ко всем вашим пожеланиям и адаптируем процессы в соответствии с запросами вашего бизнеса.</span>
        <div className={styles.firstLine}/>
        <div className={styles.secondLine}/>
        <img className={styles.firstDot} src={'/assets/whiteDot.svg'}/>
        <img className={styles.secondDot} src={'/assets/whiteDot.svg'}/>
        <img className={styles.thirdDot} src={'/assets/whiteDot.svg'}/>
        <img className={styles.fourthDot} src={'/assets/whiteDot.svg'}/>
    </div>
}
export default Value