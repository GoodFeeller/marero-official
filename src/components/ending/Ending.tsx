import {FunctionComponent} from "react";
import styles from './Ending.module.sass'
import {setNowPageType} from "../../../public/staticInfo";
import DiscussButton from "../header/discussButton/DiscussButton";
import DiscussMobileButton from "../mobile/discussButtonMobile/DiscussMobileButton";
const isMobile = window.screen.availWidth <= 560

const Ending: FunctionComponent<{page: string, setNowPage: setNowPageType}> = ({ page , setNowPage}) => {
    return <div className={styles.endingBody}>
        <div className={styles.endingContent}>
        <div className={styles.back}>
            <div className={styles.firstLine}/>
            <div className={styles.secondLine}/>
            <div className={styles.thirdLine}/>
            <div className={styles.firstDot}/>
            <div className={styles.secondDot}/>
            <span className={styles.firstSpan}>Уникальный дизайн</span>
            <span className={styles.secondSpan}>{ isMobile ? 'Техподдержка' : 'Техподдержка и консультация'}</span>
        </div>
            {   isMobile
                ?
                <div  className={styles.titleBox}>
                    <span className={styles.titleText}>ВЫВЕДИТЕ<br/>БИЗНЕС<br/>НА <span className={styles.titleGreen}>НОВЫЙ<br/></span> УРОВЕНЬ</span>
                </div>
                :
                page == 'about'
                ?
                <div  className={styles.titleBox}>
                    <span className={styles.titleTextAboutPage}>МЫ ЗАБЕРЕМ ВАШУ БОЛЬ И ТРАНСФОРМИРУЕМ</span>
                    <span className={styles.titleText}>ЕЕ В <span className={styles.titleGreen}>ВЫГОДУ</span> ДЛЯ ВАШЕГО БИЗНЕСА!</span>
                </div>
                :
                <div  className={styles.titleBox}>
                    <span className={styles.titleText}>ВЫВЕДИТЕ БИЗНЕС</span>
                    <span className={styles.titleText}>НА <span className={styles.titleGreen}>НОВЫЙ</span> УРОВЕНЬ С MARSERO</span>
                </div>
            }
        </div>
        { isMobile
            ?
            <DiscussMobileButton setNowPage={setNowPage}/>
            :
        <DiscussButton setNowPage={setNowPage}/>
        }

    </div>
}
export default Ending