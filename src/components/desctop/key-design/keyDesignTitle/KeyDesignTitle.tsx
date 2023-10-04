import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";

const KeyDesignTitle: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.keyDesignTitleBody}>
            <span className={styles.keyDesignLittleTitle}>{ page == 'branding' ? '/Разработка брендинга' :
                page == 'main-page' ? '/Дизайн сайта' :'/Разработка дизайна сайта'}</span>
        { page == 'branding' ?
            <span className={styles.keyDesignBigTitle}>МЫ ВЕРИМ<br/>В ВАШ БРЕНД</span>
            :
            page == 'main-page' ?
                <span className={styles.keyDesignBigTitle}>САЙТЫ КОТОРЫЕ<br/>ПРИНОСЯТ КЛИЕНТОВ</span>
                :
                <span className={styles.keyDesignBigTitle}>РАЗРАБОТАЕМ<br/>ДИЗАЙН ПОД КЛЮЧ</span>
        }
    </div>
}
export default memo(KeyDesignTitle)