import styles from './KeyDesignMobile.module.sass'
import {FunctionComponent} from "react";
import PopUpText from "../../special/pop-up-text/PopUpText";
import GrowingPhoto from "../../special/growingPhoto/GrowingPhoto";


const KeyDesignMobile: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={styles.keyDesignBody}>

        {/*Верхний текст*/}
        <div className={styles.keyDesignTitleBody}>
            <PopUpText str={ page == 'branding' ? '/Разработка брендинга' : '/Разработка дизайна сайта'} addDelay={0.02} threshold={1} boxClassName={styles.keyDesignLittleTitle}/>
            { page == 'branding' ?
                <div>
                    <PopUpText str={'МЫ ВЕРИМ'} threshold={1} boxClassName={styles.keyDesignBigTitle}/>
                    <PopUpText str={'В ВАШ БРЕНД'} threshold={1} boxClassName={styles.keyDesignBigTitle}/>
                </div>
                :
                <div>
                    <PopUpText str={'РАЗРАБОТАЕМ'} threshold={1} boxClassName={styles.keyDesignBigTitle}/>
                    <PopUpText str={'ДИЗАЙН САЙТА'} threshold={1} boxClassName={styles.keyDesignBigTitle}/>
                </div>
            }
        </div>

        {/*Нижний текст*/}
        <div>
            {
                page == 'main-page' ?
                    <div className={styles.keyDesignTextMainPage}>
                        <PopUpText str={'СОЗДАЙТЕ'} threshold={1}/>
                        <PopUpText str={'ПРИВЛЕКАТЕЛЬНЫЙ'} threshold={1}/>
                        <PopUpText str={'ОБРАЗ БИЗНЕСА'} threshold={1}/>
                    </div>
                    :
                    <div className={styles.keyDesignTextDesignPage}>
                        <PopUpText str={'Благодаря дизайну и более широкому'} threshold={1} addDelay={0.01}/>
                        <PopUpText str={'контексту. Наша цель: продвигать ваши идеи.'} threshold={1} addDelay={0.01}/>
                    </div>
            }
        </div>


        <div className={page == 'branding' ? styles.topImagesBoxBranding : styles.topImagesBox}>
            { page == 'branding' ?
                <GrowingPhoto height={122.76} smallSrc={'/assets/keyDesign/keyDesign8-small.png'} src={'/assets/keyDesign/keyDesign8.png'}/> :
                <GrowingPhoto height={61.38} smallSrc={'/assets/keyDesign/keyDesign.png'} src={'/assets/keyDesign/keyDesign-small.png'}/>
            }

                { page == 'branding' ?
                <GrowingPhoto height={61.38} src={'/assets/keyDesign/keyDesign9.png'} smallSrc={'/assets/keyDesign/keyDesign9-small.png'}/> :
                    <GrowingPhoto height={61.38} src={'/assets/keyDesign/keyDesign2.png'} smallSrc={'/assets/keyDesign/keyDesign2-small.png'}/>
                }

                { page == 'branding' ? <GrowingPhoto height={61.38} src={'/assets/keyDesign/keyDesign10.png'} smallSrc={'/assets/keyDesign/keyDesign10-small.png'}/> :
                    page == 'design' ?
                    <GrowingPhoto height={61.38} src={'/assets/keyDesign/keyDesign3.png'} smallSrc={'/assets/keyDesign/keyDesign3-small.png'}/> : <div/> }


                    {page == 'branding'
                    ?
                        <GrowingPhoto height={61.38} src={'/assets/keyDesign/keyDesign4.png'} smallSrc={'/assets/keyDesign/keyDesign4-small.png'}/> :
                        <GrowingPhoto height={61.38} src={ '/assets/keyDesign/keyDesign6.png'} smallSrc={'/assets/keyDesign/keyDesign6-small.png'}/>
                    }
                {page == 'branding'
                    ?
                    <GrowingPhoto height={122.76} src={'/assets/keyDesign/keyDesign5.png'} smallSrc={'/assets/keyDesign/keyDesign5-small.png'}/>
                    :
                    <GrowingPhoto height={61.38} src={'/assets/keyDesign/keyDesign7.png'} smallSrc={'/assets/keyDesign/keyDesign7-small.png'}/>
                }
        </div>

    </div>
}
export default KeyDesignMobile;