import {FunctionComponent, useState} from "react";
import styles from './CategoryMobile.module.sass'
import {categoriesList, categoriesListWorkingPageMobile, categoryType} from '../../../../public/staticInfo'
import CategoryButton from "../../desctop/categories/category-button/CategoryButton";
import Photo from "../../share/photo/Photo";
import PopUpText from "../../special/pop-up-text/PopUpText";

const CategoriesMobile: FunctionComponent<{page: string}> = ( {page} ) => {

    const [category, setCategory] = useState<categoryType>(page == 'design' ? categoriesList[0] : categoriesListWorkingPageMobile[0])
    return <div className={styles.categoriesBody}>

        {/*Верхний текст*/}
        <div className={styles.categoryTopBody}>
            <PopUpText str={page == 'design' ? '/ Категории сайтов' : '/ Категории услуг'} threshold={1} boxClassName={styles.categoriesLittleTitle}/>
            <PopUpText str={'ВОЗМОЖНОСТИ'} threshold={1} boxClassName={styles.categoriesBigTitle}/>
            <PopUpText str={'ДЛЯ БИЗНЕСА'} threshold={1} boxClassName={styles.categoriesBigTitle}/>
        </div>



            <div className={styles.imagesBox}>
                {
                    page == 'design'
                    ?
                        categoriesList.map( e =>
                            <Photo className={styles.categoryImg}
                                   src={e.src}
                                   smallSrc={e.smallSrc}
                                   style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
                        :
                        categoriesListWorkingPageMobile.map( e =>
                            <Photo className={styles.categoryImg}
                                    src={e.src}
                                    smallSrc={e.smallSrc}
                                    style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
                }
            </div>

        {/*Блок текста*/}
        <div className={styles.categoryBlock}>
            {
                page == 'design'
                    ?
                    categoriesList.map( e => <div style={ category.src == e.src ? {opacity: '1'} : {opacity: '0'}}
                                                  className={styles.categoryContent + ' ' + styles.designPageStyle}>
                        <div className={styles.categoryBlockText}><span>{e.text}</span></div>
                    </div>)
                    :
                    categoriesListWorkingPageMobile.map( e => <div style={ category.src == e.src ? {opacity: '1'} : {opacity: '0'} }
                                                                   className={styles.categoryContent + ' ' + styles.workingPageStyle}>
                        <div className={styles.categoryBlockText}><span>{e.text}</span></div>
                    </div>)
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