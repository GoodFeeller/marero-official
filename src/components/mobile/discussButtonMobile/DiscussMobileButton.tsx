import {FunctionComponent} from "react";
import styles from './DiscussMobileButton.module.sass'
import {setNowPageType} from "../../../../public/staticInfo";

const DiscussMobileButton:FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    return <button className={styles.discussButtonMobile} onClick={() => {
        setNowPage('none')
        setTimeout(() => setNowPage('callPage'), 500)
    }}>
        Обсудить проект
    </button>
}

export default DiscussMobileButton;