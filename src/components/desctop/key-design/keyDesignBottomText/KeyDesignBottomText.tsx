import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";

const KeyDesignBottomText: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.keyDesignTextBlock}>
        {
            page == 'main-page' ?
                <div  className={styles.brandingText}>
                    <span>/Брендинг</span>
                </div>
                :
                <div/>
        }
        {
            page == 'main-page' ?
                <div className={styles.keyDesignTextMainPage}>
                    <span>СОЗДАЙТЕ</span>
                    <span>ПРИВЛЕКАТЕЛЬНЫЙ</span>
                    <span>ОБРАЗ БИЗНЕСА</span>
                </div>
                :
                page == 'branding' ?
                    <div className={styles.keyDesignTextDesignPage}>
                        <span>Создаем уникальный образ вашего бизнеса.</span>
                        <span>Только яркие решения и только проверенный подход.</span>
                        <span>Наша цель: сделать ваш бренд узнаваемым.</span>
                    </div>
                    :
                    <div className={styles.keyDesignTextDesignPage}>
                        <span>Благодаря дизайну и более широкому контексту.</span>
                        <span>Мы верим, что каждый может изменить ситуацию.</span>
                        <span>Это наша цель: продвигать ваши идеи.</span>
                    </div>
        }
    </div>
}
export default memo(KeyDesignBottomText)