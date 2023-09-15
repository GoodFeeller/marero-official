import styles from './KeyDesign.module.sass'
import {FunctionComponent} from "react";
import DiscussButton from "../header/discussButton/DiscussButton";
type setDiscussType = (value: (((prevState: boolean) => boolean) | boolean)) => void
const KeyDesign: FunctionComponent<{page: string, setDiscuss: setDiscussType}> = ({page, setDiscuss}) => {
    return <div className={styles.keyDesignBody}>

        {/*Верхний текст*/}
        <div className={styles.keyDesignTitleBody}>
            <span className={styles.keyDesignLittleTitle}>{ page == 'branding' ? '/Разработка брендинга' : '/Разработка дизайна сайта'}</span>
            { page == 'branding' ?
                <span className={styles.keyDesignBigTitle}>МЫ ВЕРИМ<br/>В ВАШ БРЕНД</span>
                :
                <span className={styles.keyDesignBigTitle}>РАЗРАБОТАЕМ<br/>ДИЗАЙН ПОД КЛЮЧ</span>
            }
        </div>

        {/*Верхний блок фотографий*/}
        <div className={page == 'branding' ? styles.topImagesBoxBranding : styles.topImagesBox}>
            <div><img src={ page == 'branding' ?
                '/assets/keyDesign8.png' : '/assets/keyDesign.png'}/></div>
            <div><img src={ page == 'branding' ?
                '/assets/keyDesign9.png' : '/assets/keyDesign2.png'}/></div>
            <div>
                { page == 'branding' ? <img src={'/assets/keyDesign10.png'}/> : page == 'design' ?
                    <img src={'/assets/keyDesign3.png'}/> : <div/> }
            </div>
        </div>


        {/*Нижний текст*/}
        <div className={styles.keyDesignTextBlock}>
            {
                page == 'main-page' ?
                    <div  className={styles.brandingText}>
                        <span>/Брендинг</span>
                    </div>
                    :
                    <div/>
            }
            {
                page == 'main-page' ?
                    <div className={styles.keyDesignTextMainPage}>
                        <span>СОЗДАЙТЕ</span>
                        <span>ПРИВЛЕКАТЕЛЬНЫЙ</span>
                        <span>ОБРАЗ БИЗНЕСА</span>
                    </div>
                    :
                    <div className={styles.keyDesignTextDesignPage}>
                        <span>Благодаря дизайну и более широкому контексту.</span>
                        <span>Мы верим, что каждый может изменить ситуацию.</span>
                        <span>Это наша цель: продвигать ваши идеи.</span>
                    </div>
            }
        </div>

        {/*Нижний блок фотографий*/}
        <div style={{position: 'relative'}}>
            <div className={styles.keyDesignBottomPhotos}>
                <div><img src={page === 'main-page' || page == 'branding'
                    ? '/assets/keyDesign4.png' : '/assets/keyDesign6.svg'}/></div>
                <div><img src={page === 'main-page' || page == 'branding'
                    ? '/assets/keyDesign5.png' : '/assets/keyDesign7.svg'}/>
                    {page == 'branding' ? <div><DiscussButton setDiscuss={setDiscuss}/></div> : <div/>}
                </div>
            </div>
        </div>


    </div>
}
export default KeyDesign;