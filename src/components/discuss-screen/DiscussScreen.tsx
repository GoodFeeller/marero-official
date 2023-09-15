import {FunctionComponent} from "react";
import styles from './DiscussScreen.module.sass'
import { officialText } from '../../../public/staticInfo'
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void

const DiscussScreen: FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <div className={styles.body}>
        <img className={styles.marseroImg} src={'../../../public/assets/MARSERO.svg'}/>
        <span className={styles.officialText}>{officialText}</span>
        <button className={styles.backBtn} onClick={ () => setDiscuss(false)}/>
        <div className={styles.callBox}>
            <div className={styles.title}>
                <span>ОБРАТНЫЙ</span>
                <span>ЗВОНОК</span>
            </div>
            <div className={styles.littleTitle}>
                <span><span className={styles.green}>Уникальные</span> решения. <span className={styles.green}>Уникальная</span> эффективность.</span>
            </div>
            <div className={styles.callBody}>
                <input className={styles.input} type={"text"} placeholder={'Имя'}/>
                <input className={styles.input} type={'text'} placeholder={'Номер телефона'}/>
                <input className={styles.input} type={"email"} placeholder={'E-mail'}/>
                <button className={styles.send}>Отправить</button>
            </div>
        </div>
    </div>
}
export default DiscussScreen