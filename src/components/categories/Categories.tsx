import {FunctionComponent, useState} from "react";
import styles from './Categories.module.sass'
import CategoryButton from "./category-button/CategoryButton";
import {categoriesList, categoriesListWorkingPage, categoryType} from '../../../public/staticInfo'

const Categories: FunctionComponent<{page: string}> = ( {page} ) => {

    const [category, setCategory] = useState<categoryType>(page == 'design' ? categoriesList[0] : categoriesListWorkingPage[0])
    return <div className={styles.categoriesBody}>

        {/*Верхний текст*/}
        <div className={styles.categoryTopBody}>
            <div>
                <span className={styles.categoriesLittleTitle}>{page == 'design' ? '/Категории сайтов' : '/Категории услуг'}</span>
            </div>
            <div>
                <span className={styles.categoriesBigTitle}>ВОЗМОЖНОСТИ<br/>ДЛЯ БИЗНЕСА</span>
            </div>
        </div>

        {/*Нижний блок*/}
        <div className={styles.categoryBottomBody}>

            {/*Блок картинок*/}
            <div>
                {
                    page == 'design'
                    ?
                        categoriesList.map( e =>
                            <img className={styles.categoryImg} src={e.src} style={category.src == e.src ? {opacity: '1'} : {opacity: '0'}} />)
                        :
                        categoriesListWorkingPage.map( e =>
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
                        categoriesListWorkingPage.map( (e, i) =>
                            <CategoryButton chosen={category} key={i} category={e} setCategory={setCategory}/>)}
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
                            categoriesListWorkingPage.map( e => <div style={ category.src == e.src ? {opacity: '1'} : {opacity: '0'} }
                            className={styles.categoryContent}>
                                <div className={styles.categoryBlockId}><span>{e.id}</span></div>
                                <div className={styles.categoryBlockTitle}><span>{e.title}</span></div>
                                <div className={styles.categoryBlockText}><span>{e.text}</span></div>
                            </div>)
                    }
                </div>
            </div>
        </div>

    </div>
}

export default Categories