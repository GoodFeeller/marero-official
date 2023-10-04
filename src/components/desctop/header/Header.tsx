import {FunctionComponent, useEffect, useState} from "react";
import {phoneNumber, setNowPageType} from '../../../../public/staticInfo'
import styles from './Header.module.sass'
import DiscussButton from "./discussButton/DiscussButton";
import Links from "./links/Links";
import {useNavigate} from "react-router-dom";

interface IProps {
    page: string
    setNowPage: setNowPageType
    setPosition:  (value: (((prevState: number) => number) | number)) => void
}

const Header:FunctionComponent<IProps> = ({page, setNowPage, setPosition}) => {
    const [scroll, setScroll] = useState<number>(0)
    const [show, setShow] = useState<boolean>(true)
    const navigate = useNavigate()
    useEffect( () => {
        const checkScroll = () => {
            setShow(scroll > window.scrollY || window.scrollY < 0.064 * window.innerWidth)
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener('scroll', checkScroll)
    }, [scroll])
    return <header className={show ? styles.header : styles.header + ' ' + styles.headerClosed}>
        <img onClick={() => navigate('/')} className={styles.imgMarsero} src='/assets/MARSERO.svg'/>
        <Links page={page}/>
        <span className={styles.phone}>{phoneNumber}</span>
        <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
    </header>
}

export default Header;