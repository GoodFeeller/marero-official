import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";
import PopUpText from "../../../special/pop-up-text/PopUpText";

const KeyDesignBottomText: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.keyDesignTextBlock}>
        {
            page == 'main-page' ?
                <div  className={styles.brandingText}>
                    <PopUpText str={'/Брендинг'} threshold={1}/>
                </div>
                :
                <div/>
        }
        {
            page == 'main-page' ?
                <div className={styles.keyDesignTextMainPage}>
                    <PopUpText str={'СОЗДАЙТЕ'} threshold={1}/>
                    <PopUpText str={'ПРИВЛЕКАТЕЛЬНЫЙ'} threshold={1}/>
                    <PopUpText str={'ОБРАЗ БИЗНЕСА'} threshold={1}/>
                </div>
                :
                page == 'branding' ?
                    <div className={styles.keyDesignTextDesignPage}>
                        <PopUpText str={'Создаем уникальный образ вашего бизнеса.'} threshold={1} addDelay={0.01}/>
                        <PopUpText str={'Только яркие решения и только проверенный подход.'} threshold={1} addDelay={0.01}/>
                        <PopUpText str={'Наша цель: сделать ваш бренд узнаваемым.'} threshold={1} addDelay={0.01}/>
                    </div>
                    :
                    <div className={styles.keyDesignTextDesignPage}>
                        <PopUpText str={'Благодаря дизайну и более широкому контексту.'} threshold={1} addDelay={0.01}/>
                        <PopUpText str={'Мы верим, что каждый может изменить ситуацию.'} threshold={1} addDelay={0.01}/>
                        <PopUpText str={'Это наша цель: продвигать ваши идеи.'} threshold={1} addDelay={0.01}/>
                    </div>
        }
    </div>
}
export default memo(KeyDesignBottomText)