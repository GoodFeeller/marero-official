import {FunctionComponent} from "react";
import {phoneNumber, setNowPageType} from '../../../public/staticInfo'
import styles from './Header.module.sass'
import DiscussButton from "./discussButton/DiscussButton";
import Links from "./links/Links";

const Header:FunctionComponent<{page: string, setNowPage: setNowPageType}> = ({page, setNowPage}) => {
    return <header className={styles.header}>
        <img className={styles.imgMarsero} src='/assets/MARSERO.svg'/>
        <Links page={page}/>
        <span className={styles.phone}>{phoneNumber}</span>
        <DiscussButton setNowPage={setNowPage}/>
    </header>
}

export default Header;