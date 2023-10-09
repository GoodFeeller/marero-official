import {FunctionComponent} from "react";
import styles from './HeaderMobile.module.sass'
import {setNowPageType} from "../../../../public/staticInfo";
import {useNavigate} from "react-router-dom";


const HeaderMobile: FunctionComponent<{setNowPage: setNowPageType}> = ({setNowPage}) => {
    const navigate = useNavigate()

    return <div className={styles.headerBody}>

        <img onClick={() => navigate('/')} src={'/assets/MARSERO.svg'}/>
        <button onClick={() => {
            setNowPage('none')
            setTimeout(() => setNowPage('pageChanger'), 500)
        }}>
            <div/>
            <div/>
            <div/>
        </button>
    </div>
}
export default HeaderMobile