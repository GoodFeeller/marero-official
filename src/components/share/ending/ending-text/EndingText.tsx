import {FunctionComponent, memo} from "react";
import styles from "../Ending.module.sass";
import PopUpText from "../../../special/pop-up-text/PopUpText";

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
                <PopUpText str={'МЫ ЗАБЕРЕМ'} threshold={1} boxClassName={styles.titleTextAboutPage}/>
                <PopUpText str={'ВАШУ БОЛЬ'} threshold={1} boxClassName={styles.titleTextAboutPage}/>
                <div className={styles.titleTextAboutPage} style={{display: 'flex'}}>
                    <PopUpText str={'И '} threshold={1}/>
                    <PopUpText str={'ТРАНСФОРМИРУЕМ'} threshold={1} className={styles.titleGreen}/>
                </div>
                <PopUpText str={'ЕЁ В ВЫГОДУ!'} threshold={1} boxClassName={styles.titleTextAboutPage}/>
            </div>
            :
            <div className={styles.titleBox}>
                <PopUpText str={'ВЫВЕДИТЕ'} threshold={1} boxClassName={styles.titleText}/>
                <PopUpText str={'БИЗНЕС'} threshold={1} boxClassName={styles.titleText}/>
                <div className={styles.titleText} style={{display: 'flex'}}>
                    <PopUpText str={'НА '} threshold={1}/>
                    <PopUpText str={'НОВЫЙ'} threshold={1} className={styles.titleGreen}/>
                </div>
                <PopUpText str={'УРОВЕНЬ'} threshold={1} boxClassName={styles.titleText}/>
            </div>
        :
        page == 'about'
            ?
            <div className={styles.titleBox}>
                <PopUpText str={'МЫ ЗАБЕРЕМ ВАШУ БОЛЬ И ТРАНСФОРМИРУЕМ'} threshold={1} className={styles.titleTextAboutPage} addDelay={0.02}/>
                <div>
                    <PopUpText str={'ЕЕ В '} threshold={1} className={styles.titleTextAboutPage} addDelay={0.02}/>
                    <PopUpText str={'ВЫГОДУ'} threshold={1} className={styles.titleTextAboutPage + ' ' + styles.titleGreen} addDelay={0.02} startDelay={0.06}/>
                    <PopUpText str={' ДЛЯ ВАШЕГО БИЗНЕСА!'} threshold={1} className={styles.titleTextAboutPage} addDelay={0.02} startDelay={0.18}/>

                </div>
            </div>
            :
            <div className={styles.titleBox}>
                <PopUpText str={'ВЫВЕДИТЕ БИЗНЕС'} threshold={1} className={styles.titleText}/>
                <div>
                    <PopUpText str={'НА '} threshold={1} className={styles.titleText}/>
                    <PopUpText str={'НОВЫЙ'} threshold={1} className={styles.titleText + ' ' + styles.titleGreen}/>
                    <PopUpText str={' УРОВЕНЬ С MARSERO'} threshold={1} className={styles.titleText}/>
                </div>
            </div>
    }
    </div>
}
export default memo(EndingText)