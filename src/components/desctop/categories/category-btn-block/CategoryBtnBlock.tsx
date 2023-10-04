import {FunctionComponent, memo} from "react";
import styles from "../Categories.module.sass";
import {categoriesList, categoriesListWorkingPage, categoryType} from "../../../../../public/staticInfo";
import CategoryButton from "../category-button/CategoryButton";

interface IProps {
    page: string,
    category: categoryType
    setCategory:  (value: (((prevState: categoryType) => categoryType) | categoryType)) => void
}
const CategoryBtnBlock: FunctionComponent<IProps> = ({page, category, setCategory}) => {
    return <div className={ page == 'design' ? styles.buttonsBox : styles.buttonsBoxWorkingPage}>
        {page == 'design' ?
            categoriesList.map( (e, i) =>
                <CategoryButton  chosen={category} key={i} category={e} setCategory={setCategory}/>)
            :
            categoriesListWorkingPage.map( (e, i) =>
                <CategoryButton chosen={category} key={i} category={e} setCategory={setCategory}/>)}
    </div>
}
export default memo(CategoryBtnBlock)