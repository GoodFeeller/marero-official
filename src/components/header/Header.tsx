import {FunctionComponent} from "react";
import { phoneNumber } from '../../../public/staticInfo'
import styles from './Header.module.sass'
import DiscussButton from "./discussButton/DiscussButton";
import Links from "./links/Links";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void

const Header:FunctionComponent<{page: string, setDiscuss: setDiscussType}> = ({page, setDiscuss}) => {
    return <header className={styles.header}>
        <img className={styles.imgMarsero} src='../../../public/assets/MARSERO.svg'/>
        <Links page={page}/>
        <span className={styles.phone}>{phoneNumber}</span>
        <DiscussButton setDiscuss={setDiscuss}/>
    </header>
}

export default Header;