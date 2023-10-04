import {FunctionComponent, memo} from "react";
import styles from "../Categories.module.sass";
import {categoriesList, categoriesListWorkingPage, categoryType} from "../../../../../public/staticInfo";

interface IProps {
    page: string,
    category: categoryType
}
const CategoryTextBlock: FunctionComponent<IProps> = ({page, category}) => {
    return <div className={styles.categoryBlock} style={page == 'working' ? {minHeight: '15vw'} : {minHeight: '11.09vw'}}>
        {
            page == 'design'
                ?
                categoriesList.map( e => <div style={ category.src == e.src ? {opacity: '1'} : {opacity: '0'}}
                                              className={styles.categoryContent + ' ' + styles.webDesignTextStyle}>
                    <span className={styles.categoryBlockId}>{e.id}</span>
                    <span className={styles.categoryBlockTitle}>{e.title}</span>
                    <span className={styles.categoryBlockText}>{e.text}</span>
                </div>)
                :
                categoriesListWorkingPage.map( e => <div style={ category.src == e.src ? {opacity: '1'} : {opacity: '0'} }
                                                         className={styles.categoryContent + ' ' + styles.workingTextStyle}>
                    <span className={styles.categoryBlockId}>{e.id}</span>
                    <span className={styles.categoryBlockTitle}>{e.title}</span>
                    {
                        typeof e.text != 'string'
                            ?
                            <div className={styles.categoryBlockText}>
                                {e.text.map( s => <span>{s}</span>)}
                            </div>
                            :
                            <span className={styles.categoryBlockText}>{e.text}</span>
                    }
                </div>)
        }
    </div>
}
export default memo(CategoryTextBlock)