import {FunctionComponent} from "react";
import styles from './HeaderMobile.module.sass'
type setPageChangerType = (value: (((prevState: boolean) => boolean) | boolean)) => void

const HeaderMobile: FunctionComponent<{setPageChanger: setPageChangerType}> = ({setPageChanger}) => {
    return <div className={styles.headerBody}>

        <img src={'/assets/MARSERO.svg'}/>
        <button onClick={() => setPageChanger(true)}>
            <div/>
            <div/>
            <div/>
        </button>
    </div>
}
export default HeaderMobile