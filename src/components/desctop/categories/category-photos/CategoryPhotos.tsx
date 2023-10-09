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
                    <Photo className={styles.categoryImg}
                           smallSrc={e.smallSrc}
                           src={e.src}
                           style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
                :
                categoriesListWorkingPage.map( e =>
                    <Photo className={styles.categoryImgWorkingPage}
                           smallSrc={e.smallSrc}
                           src={e.src}
                           style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
        }
    </div>
}
export default CategoryPhotos