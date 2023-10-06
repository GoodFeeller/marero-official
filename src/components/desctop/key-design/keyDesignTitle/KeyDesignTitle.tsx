import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";
import PopUpText from "../../../special/pop-up-text/PopUpText";

const KeyDesignTitle: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.keyDesignTitleBody}>
        <div>
            <PopUpText str={ page == 'branding' ? '/Разработка брендинга' :
                page == 'main-page' ? '/Дизайн сайта' :'/Разработка дизайна сайта'} threshold={1} className={styles.keyDesignLittleTitle}/>
        </div>
        { page == 'branding' ?
            <div>
                <PopUpText str={'МЫ ВЕРИМ'} threshold={1} className={styles.keyDesignBigTitle}/>
                <PopUpText str={'В ВАШ БРЕНД'} threshold={1} className={styles.keyDesignBigTitle}/>
            </div>
            :
            page == 'main-page' ?
                <div>
                    <PopUpText str={'САЙТЫ КОТОРЫЕ'} threshold={1} className={styles.keyDesignBigTitle}/>
                    <PopUpText str={'ПРИНОСЯТ КЛИЕНТОВ'} threshold={1} className={styles.keyDesignBigTitle}/>
                </div>
                :
                <div>
                    <PopUpText str={'РАЗРАБОТАЕМ'} threshold={1} className={styles.keyDesignBigTitle}/>
                    <PopUpText str={'ДИЗАЙН ПОД КЛЮЧ'} threshold={1} className={styles.keyDesignBigTitle}/>
                </div>
        }
    </div>
}
export default memo(KeyDesignTitle)