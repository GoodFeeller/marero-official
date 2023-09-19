import {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import styles from './PageSwitcher.module.sass'
type setPageChangerType = (value: (((prevState: boolean) => boolean) | boolean)) => void

const PagesSwitcher: FunctionComponent<{page: string, setPageChanger: setPageChangerType}> =
    ({page, setPageChanger}) => {
    return <div className={styles.switcherBody}>
        <div className={styles.header}>
            <img className={styles.marseroImg} src={'/assets/MARSERO.svg'}/>
            <button className={styles.closeBtn} onClick={() => setPageChanger(false)}>
                <div/>
                <div/>
            </button>
        </div>
        <div className={styles.linkBox}>
            <Link className={styles.link} style={page == 'main' ? {color: "rgba(0, 255, 10, 1)"} : {}} to={'/'}>ГЛАВНАЯ</Link>
            <Link className={styles.link} style={page == 'about' ? {color: "rgba(0, 255, 10, 1)"} : {}} to={'/about'}>О НАС</Link>
            <Link className={styles.link} style={page == 'working' ? {color: "rgba(0, 255, 10, 1)"} : {}} to={'/working'}>РАЗРАБОТКА</Link>
            <Link className={styles.link} style={page == 'design' ? {color: "rgba(0, 255, 10, 1)"} : {}} to={'/design'}>ВЕБ-ДИЗАЙН</Link>
            <Link className={styles.link} style={page == 'branding' ? {color: "rgba(0, 255, 10, 1)"} : {}} to={'/branding'}>БРЕНДИНГ</Link>
        </div>
    </div>
}
export default PagesSwitcher