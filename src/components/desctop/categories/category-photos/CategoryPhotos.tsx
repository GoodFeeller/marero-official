import {FunctionComponent} from "react";
import {categoriesList, categoriesListWorkingPage, categoryType} from "../../../../../public/staticInfo";
import Photo from "../../../share/photo/Photo";
import styles from "../Categories.module.sass";

interface IProps {
    page: string,
    category: categoryType
}
const CategoryPhotos: FunctionComponent<IProps> = ({page, category}) => {
    return <div>
        {
            page == 'design'
                ?
                categoriesList.map( e =>
                    <Photo className={category.src == e.src ? styles.categoryImg + ' ' + styles.open : styles.categoryImg + ' ' + styles.close}
                           smallSrc={e.smallSrc}
                           src={e.src}
                    />)
                :
                categoriesListWorkingPage.map( e =>
                    <Photo className={category.src == e.src ? styles.categoryImgWorkingPage + ' ' + styles.open : styles.categoryImgWorkingPage + ' ' + styles.close}
                           smallSrc={e.smallSrc}
                           src={e.src}
                           style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
        }
    </div>
}
export default CategoryPhotos