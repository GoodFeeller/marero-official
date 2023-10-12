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
            <form action="/send.php" method={"POST"} className={styles.callBody}>
                <input className={styles.input} name="name" placeholder={'Имя'} type='text' required={true}/>
                <input className={styles.input} name="phone" placeholder={'Номер телефона'} type='tel' required={true}/>
                <input className={styles.input} name="email" placeholder={'E-mail'} type='email' required={true}/>
                <CheckBox checked={checked} setChecked={setChecked}/>
                <input disabled={!checked} className={styles.send} type='submit'/>
            </form>
        </div>
    </div>
}
export default DiscussScreen