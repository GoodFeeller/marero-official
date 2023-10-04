import {FunctionComponent, memo} from "react";
import styles from "../Categories.module.sass";

const CategoryTopText: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.categoryTopBody}>
        <div>
            <span className={styles.categoriesLittleTitle}>{page == 'design' ? '/Категории сайтов' : '/Категории услуг'}</span>
        </div>
        <div>
            <span className={styles.categoriesBigTitle}>ВОЗМОЖНОСТИ<br/>ДЛЯ БИЗНЕСА</span>
        </div>
    </div>
}
export default memo(CategoryTopText)