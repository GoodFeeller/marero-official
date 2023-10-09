import {FunctionComponent, memo} from "react";
import styles from './Copy.module.sass'

const Copy: FunctionComponent = () => {
    return <div className={styles.copy}>
        Скопированно<br/>в буфер обмена
    </div>
}
export default memo(Copy)