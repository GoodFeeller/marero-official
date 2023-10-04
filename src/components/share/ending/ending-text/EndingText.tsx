import {FunctionComponent, memo} from "react";
import styles from "../Ending.module.sass";

interface IProps {
    isMobile: boolean,
    page: string
}
const EndingText: FunctionComponent<IProps> = ({isMobile, page}) => {
    return <div className={styles.endingTextBody}>{isMobile
        ?
        page == 'about'
            ?
            <div className={styles.titleBox}>
                <span className={styles.titleTextAboutPage}>МЫ ЗАБЕРЕМ<br/>ВАШУ БОЛЬ<br/>И <span
                    className={styles.titleGreen}>ТРАНСФОРМИРУЕМ<br/></span> ЕЁ В ВЫГОДУ!</span>
            </div>
            :
            <div className={styles.titleBox}>
                <span className={styles.titleText}>ВЫВЕДИТЕ<br/>БИЗНЕС<br/>НА <span
                    className={styles.titleGreen}>НОВЫЙ<br/></span> УРОВЕНЬ</span>
            </div>
        :
        page == 'about'
            ?
            <div className={styles.titleBox}>
                <span className={styles.titleTextAboutPage}>МЫ ЗАБЕРЕМ ВАШУ БОЛЬ И ТРАНСФОРМИРУЕМ</span>
                <span className={styles.titleTextAboutPage}>ЕЕ В <span className={styles.titleGreen}>ВЫГОДУ</span> ДЛЯ ВАШЕГО БИЗНЕСА!</span>
            </div>
            :
            <div className={styles.titleBox}>
                <span className={styles.titleText}>ВЫВЕДИТЕ БИЗНЕС</span>
                <span className={styles.titleText}>НА <span className={styles.titleGreen}>НОВЫЙ</span> УРОВЕНЬ С MARSERO</span>
            </div>
    }
    </div>
}
export default memo(EndingText)