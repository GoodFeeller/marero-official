import {FunctionComponent, memo} from "react";
import styles from "../Categories.module.sass";
import PopUpText from "../../../special/pop-up-text/PopUpText";

const CategoryTopText: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.categoryTopBody}>
        <div>
            <PopUpText str={page == 'design' ? '/Категории сайтов' : '/Категории услуг'} threshold={1} className={styles.categoriesLittleTitle}/>
        </div>
        <div>
            <PopUpText str={'ВОЗМОЖНОСТИ'} threshold={1} className={styles.categoriesBigTitle}/>
            <PopUpText str={'ДЛЯ БИЗНЕСА'} threshold={1} className={styles.categoriesBigTitle}/>
        </div>
    </div>
}
export default memo(CategoryTopText)