import {FunctionComponent, useEffect, useState} from "react";
import {phoneNumber, setNowPageType} from '../../../../public/staticInfo'
import styles from './Header.module.sass'
import DiscussButton from "./discussButton/DiscussButton";
import Links from "./links/Links";
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import Copy from "../../special/copy/Copy";

interface IProps {
    page: string
    setNowPage: setNowPageType
    setPosition:  (value: (((prevState: number) => number) | number)) => void
}
const copy = (info: string) => {
    navigator.clipboard.writeText(info)
}
const Header:FunctionComponent<IProps> = ({page, setNowPage, setPosition}) => {
    const [scroll, setScroll] = useState<number>(0)
    const [show, setShow] = useState<boolean>(true)
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    useEffect( () => {
        const checkScroll = () => {
            setShow(scroll > window.scrollY || window.scrollY < 0.064 * window.innerWidth)
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener('scroll', checkScroll)
    }, [scroll])
    return <div>
        <header className={show ? styles.header : styles.header + ' ' + styles.headerClosed}>
        <img onClick={() => navigate('/')} className={styles.imgMarsero} src='/assets/MARSERO.svg'/>
        <Links page={page}/>
        <span onClick={ () => {
            copy(phoneNumber)
            setClick(true)
            setTimeout(() => setClick(false), 1500)
        }
        } className={styles.phone}>{phoneNumber}</span>
        <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
    </header>
        <CSSTransition in={click} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <Copy/>
        </CSSTransition>
    </div>

}

export default Header;