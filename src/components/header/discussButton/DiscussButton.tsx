import {FunctionComponent} from "react";
import styles from './../Header.module.sass'
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
const DiscussButton:FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <button className={styles.discussButton} onClick={() => setDiscuss(true)}>
        Обсудить проект
    </button>
}

export default DiscussButton;