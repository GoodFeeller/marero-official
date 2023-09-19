import styles from './KeyDesignMobile.module.sass'
import {FunctionComponent} from "react";
const KeyDesignMobile: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.keyDesignBody}>

        {/*Верхний текст*/}
        <div className={styles.keyDesignTitleBody}>
            <span className={styles.keyDesignLittleTitle}>{ page == 'branding' ? '/Разработка брендинга' : '/Разработка дизайна сайта'}</span>
            { page == 'branding' ?
                <span className={styles.keyDesignBigTitle}>МЫ ВЕРИМ<br/>В ВАШ БРЕНД</span>
                :
                <span className={styles.keyDesignBigTitle}>РАЗРАБОТАЕМ<br/>ДИЗАЙН САЙТА</span>
            }
        </div>

        {/*Нижний текст*/}
        <div>
            {
                page == 'main-page' ?
                    <div className={styles.keyDesignTextMainPage}>
                        <span>СОЗДАЙТЕ</span>
                        <span>ПРИВЛЕКАТЕЛЬНЫЙ</span>
                        <span>ОБРАЗ БИЗНЕСА</span>
                    </div>
                    :
                    <div className={styles.keyDesignTextDesignPage}>
                        <span>Благодаря дизайну и более широкому<br/> контексту. Наша цель: продвигать ваши идеи.</span>
                    </div>
            }
        </div>


        <div className={page == 'branding' ? styles.topImagesBoxBranding : styles.topImagesBox}>
            <div><img src={ page == 'branding' ?
                '/assets/keyDesign8.png' : '/assets/keyDesign.png'}/></div>
            <div><img src={ page == 'branding' ?
                '/assets/keyDesign9.png' : '/assets/keyDesign2.png'}/></div>
            <div>
                { page == 'branding' ? <img src={'/assets/keyDesign10.png'}/> : page == 'design' ?
                    <img src={'/assets/keyDesign3.png'}/> : <div/> }
            </div>
                <div><img src={page == 'branding'
                    ? '/assets/keyDesign4.png' : '/assets/keyDesign6.svg'}/></div>
                <div><img src={page == 'branding'
                    ? '/assets/keyDesign5.png' : '/assets/keyDesign7.svg'}/>
                </div>
        </div>

    </div>
}
export default KeyDesignMobile;