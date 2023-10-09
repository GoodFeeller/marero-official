import {FunctionComponent, useState} from "react";
import {phoneNumber, marseroMail, officialText} from '../../../../public/staticInfo'
import styles from './FooterMobile.module.sass'
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import Copy from "../../special/copy/Copy";
const copy = (info: string) => {
    navigator.clipboard.writeText(info)
}
const FooterMobile: FunctionComponent = () => {
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    return <div className={styles.footerBody}>
        <div className={styles.line}/>
        <img onClick={() => navigate('/')} className={styles.image} src={'/assets/MARSERO.svg'}/>
        <div className={styles.textBox}>
            <span onClick={() => {
                copy(phoneNumber)
                setClick(true)
                setTimeout(() => setClick(false), 1500)
            }}>{phoneNumber}</span>
            <span onClick={() => {
                copy(marseroMail)
                setClick(true)
                setTimeout(() => setClick(false), 1500)
            }}>{marseroMail}</span>
        </div>
            <div className={styles.linkBox}>
                <a href={'https://www.linkedin.com/in/marsero-corporation-986910250/?originalSubdomain=by'} target={'_blank'}/>
                <a href={'https://www.instagram.com/marsero_org/'} target={'_blank'}/>
                <a href={'https://t.me/MARSERO_ORG'} target={'_blank'}/>
            </div>
        <button className={styles.arrowBtn} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}/>
        <span className={styles.officialSpan}>{officialText}</span>
        <CSSTransition in={click} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <Copy/>
        </CSSTransition>
    </div>
}
export default FooterMobile