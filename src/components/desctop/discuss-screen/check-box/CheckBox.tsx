import {FunctionComponent} from "react";
import styles from './CheckBox.module.sass'

interface IProps {
    checked: boolean,
    setChecked: (value: (((prevState: boolean) => boolean) | boolean)) => void
}
const CheckBox: FunctionComponent<IProps> = ( { checked, setChecked } ) => {
    return <div className={styles.box}>
        <input className={styles.checkBox} type={'checkbox'} checked={checked} onChange={() => setChecked(!checked)}/>
        <span className={styles.text}>Я согласен на обработку персональных данных</span>
    </div>
}
export default CheckBox