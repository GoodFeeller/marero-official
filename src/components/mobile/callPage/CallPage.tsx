import {FunctionComponent, useState} from "react";
import styles from './CallPage.module.sass'
import { setNowPageType} from "../../../../public/staticInfo";
import CheckBox from "../../desctop/discuss-screen/check-box/CheckBox";

const CallPage: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    const [checked, setChecked] = useState<boolean>(false)
    return <div className={styles.callBody}>
        <div className={styles.header}>
            <img className={styles.marseroImg} src={'/assets/MARSERO.svg'}/>
            <button className={styles.closeBtn} onClick={() => {
                setNowPage('none')
                setTimeout(() => setNowPage('common'), 500)
            }}>
                <div/>
                <div/>
            </button>
        </div>
        <div className={styles.callBlock}>
                <span className={styles.callBigTitle}>
                    ОБРАТНЫЙ<br/>ЗВОНОК
                </span>
                <span className={styles.spanBlock}>
                    <span className={styles.green}>Уникальные</span> решения. <span className={styles.green}>Уникальная</span> эффективность.
                </span>
                <form action="/send.php" method={"POST"} className={styles.formBox}>
                    <input className={styles.input} name="name" placeholder={'Имя'} type='text' required={true}/>
                    <input className={styles.input} name="phone" placeholder={'Номер телефона'} type='tel' required={true}/>
                    <input className={styles.input} name="email" placeholder={'E-mail'} type='email' required={true}/>
                    <CheckBox checked={checked} setChecked={setChecked}/>
                    <input disabled={!checked} className={styles.sendBtn} type='submit'/>
                </form>
        </div>
    </div>
}
export default CallPage