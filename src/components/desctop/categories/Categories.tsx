import {FunctionComponent, useState} from "react";
import styles from './Categories.module.sass'
import {categoriesList, categoriesListWorkingPage, categoryType} from '../../../../public/staticInfo'
import CategoryTopText from "./category-top-text/CategoryTopText";
import CategoryPhotos from "./category-photos/CategoryPhotos";
import CategoryBtnBlock from "./category-btn-block/CategoryBtnBlock";
import CategoryTextBlock from "./category-text-block/CategoryTextBlock";

const Categories: FunctionComponent<{page: string}> = ( {page} ) => {

    const [category, setCategory] = useState<categoryType>(page == 'design' ? categoriesList[0] : categoriesListWorkingPage[0])
    return <div className={styles.categoriesBody}>
        <CategoryTopText page={page}/>
        <div className={styles.categoryBottomBody}>
            <CategoryPhotos page={page} category={category}/>
            <div className={styles.categoryRightBottom}>
                <CategoryBtnBlock page={page} setCategory={setCategory} category={category}/>
                <CategoryTextBlock page={page} category={category}/>
            </div>
        </div>

    </div>
}

export default Categories