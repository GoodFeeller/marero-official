import {FunctionComponent} from "react";
import styles from './DiscussMobileButton.module.sass'
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
const DiscussMobileButton:FunctionComponent<{setDiscuss: setDiscussType}> = ({setDiscuss}) => {
    return <button className={styles.discussButtonMobile} onClick={() => setDiscuss(true)}>
        Обсудить проект
    </button>
}

export default DiscussMobileButton;