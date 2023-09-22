import {FunctionComponent} from "react";
import styles from './../Header.module.sass'
import {setNowPageType} from "../../../../public/staticInfo";
const DiscussButton:FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <button className={styles.discussButton} onClick={() => {
        setNowPage('none')
        setTimeout( () => setNowPage('callPage'), 240)
    }
    }>
        Обсудить проект
    </button>
}

export default DiscussButton;