import {FunctionComponent, useState} from "react";
import styles from './CategoryMobile.module.sass'
import {categoriesList, categoriesListWorkingPageMobile, categoryType} from '../../../../public/staticInfo'
import CategoryButton from "../../categories/category-button/CategoryButton";

const CategoriesMobile: FunctionComponent<{page: string}> = ( {page} ) => {

    const [category, setCategory] = useState<categoryType>(page == 'design' ? categoriesList[0] : categoriesListWorkingPageMobile[0])
    return <div className={styles.categoriesBody}>

        {/*Верхний текст*/}
        <div className={styles.categoryTopBody}>
                <span className={styles.categoriesLittleTitle}>{page == 'design' ? '/Категории сайтов' : '/Категории услуг'}</span>
                <span className={styles.categoriesBigTitle}>ВОЗМОЖНОСТИ<br/>ДЛЯ БИЗНЕСА</span>
        </div>

        {/*Блок текста*/}
        <div className={styles.categoryBlock}>
            {
                page == 'design'
                    ?
                    categoriesList.map( e => <div style={ category.src == e.src ? {opacity: '1'} : {opacity: '0'}}
                                                  className={styles.categoryContent}>
                        <div className={styles.categoryBlockId}><span>{e.id}</span></div>
                        <div className={styles.categoryBlockTitle}><span>{e.title}</span></div>
                        <div className={styles.categoryBlockText}><span>{e.text}</span></div>
                    </div>)
                    :
                    categoriesListWorkingPageMobile.map( e => <div style={ category.src == e.src ? {opacity: '1'} : {opacity: '0'} }
                                                             className={styles.categoryContent}>
                        <div className={styles.categoryBlockId}><span>{e.id}</span></div>
                        <div className={styles.categoryBlockTitle}><span>{e.title}</span></div>
                        <div className={styles.categoryBlockText}><span>{e.text}</span></div>
                    </div>)
            }
        </div>

            <div className={styles.imagesBox}>
                {
                    page == 'design'
                    ?
                        categoriesList.map( e =>
                            <img className={styles.categoryImg} src={e.src} style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
                        :
                        categoriesListWorkingPageMobile.map( e =>
                            <img className={styles.categoryImg} src={e.src} style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
                }
            </div>

            <div className={styles.categoryRightBottom}>
                {/*Блок кнопок*/}
                <div className={ page == 'design' ? styles.buttonsBox : styles.buttonsBoxWorkingPage}>
                    {page == 'design' ?
                        categoriesList.map( (e, i) =>
                            <CategoryButton  chosen={category} key={i} category={e} setCategory={setCategory}/>)
                        :
                        categoriesListWorkingPageMobile.map( (e, i) =>
                            <CategoryButton chosen={category} key={i} category={e} setCategory={setCategory}/>)}
                </div>
            </div>
    </div>
}

export default CategoriesMobile