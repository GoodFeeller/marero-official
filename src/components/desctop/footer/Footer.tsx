import {FunctionComponent, memo, useState} from "react";
import {infoMail, officialText, phoneNumber} from '../../../../public/staticInfo'
import {Link, useNavigate} from "react-router-dom";
import styles from './Footer.module.sass'
import {CSSTransition} from "react-transition-group";
import Copy from "../../special/copy/Copy";

const copy = (info: string) => {
    navigator.clipboard.writeText(info)
}
const Footer: FunctionComponent = () => {
    const [click, setClick] = useState(false)
    const navigate = useNavigate()

    return<div className={styles.footerBody}>
        <div className={styles.line}/>
        <div className={styles.leftContent}>
            <div><img onClick={() => navigate('/')}  src={'/assets/MARSERO.svg'}/></div>
            <div><span className={styles.officialText}>{officialText}</span></div>
        </div>
        <div className={styles.rightContent}>
            <div>
                <span>КОНТАКТЫ</span>
                <span onClick={() => {
                    copy(phoneNumber)
                    setClick(true)
                    setTimeout(() => setClick(false), 1500)
                }}>{phoneNumber}</span>
                <span onClick={() => {
                    copy(infoMail)
                    setClick(true)
                    setTimeout(() => setClick(false), 1500)
                }}>{infoMail}</span>
            </div>
            <div>
                <span>СТРАНИЦЫ</span>
                <span><Link className={styles.link} to={'/'}>Главная</Link></span>
                <span><Link className={styles.link}  to={'/design'}>Web-design</Link></span>
                <span><Link className={styles.link}  to={'/branding'}>Брендинг</Link></span>
                <span><Link className={styles.link}  to={'/working'}>Разработка</Link></span>
            </div>
            <div>
                <span>МЫ В СЕТЯХ</span>
                <a href={'https://www.instagram.com/marsero_org/'} target={'_blank'}>Instagram</a>
                <a href={'https://www.linkedin.com/in/marsero-corporation-986910250/?originalSubdomain=by'} target={'_blank'}>Linkedin</a>
                <a href='https://t.me/MARSERO_ORG' target={'_blank'}>Telegram</a>
            </div>
        </div>
        <CSSTransition in={click} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <Copy/>
        </CSSTransition>
    </div>
}
export default memo(Footer)