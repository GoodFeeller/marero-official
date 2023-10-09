import {FunctionComponent, useState} from "react";
import styles from './DiscussScreen.module.sass'
import {officialText, setNowPageType} from '../../../../public/staticInfo'
import CheckBox from "./check-box/CheckBox";

const DiscussScreen: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    const [checked, setChecked] = useState<boolean>(false)
    return <div className={styles.body}>
        <img className={styles.marseroImg} src={'/assets/MARSERO.svg'}/>
        <span className={styles.officialText}>{officialText}</span>
        <div className={styles.backBtn} onClick={ () => {
            setNowPage('none')
            setTimeout(() => setNowPage('common'), 500)
        }}>
            <div/>
            <div/>
            <div/>
        </div>
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
                <CheckBox checked={checked} setChecked={setChecked}/>
                <button disabled={!checked} className={styles.send}>Отправить</button>
            </div>
        </div>
    </div>
}
export default DiscussScreen