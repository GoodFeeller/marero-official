import {FunctionComponent} from "react";
import styles from './WaitScreen.module.sass'
import {officialText} from '../../../../public/staticInfo'
import {Link} from "react-router-dom";

const WaitScreen: FunctionComponent = () => {
    return <div className={styles.body}>
        <img className={styles.marseroImg} src={'/assets/MARSERO.svg'}/>
        <span className={styles.officialText}>{officialText}</span>
        <div className={styles.callBox}>
            <div className={styles.title}>
                <span>СПАСИБО</span>
                <span>ЗА ВАШ ОТКЛИК</span>
            </div>
            <div className={styles.littleTitle}>
                <span><span className={styles.green}>Скоро</span> с вами свяжется наш менеджер</span>
            </div>
            <div className={styles.callBody}>
                <Link className={styles.send} to={'/'}>Закрыть</Link>
            </div>
        </div>
    </div>
}
export default WaitScreen