import {FunctionComponent, useEffect, useState} from "react";
import styles from './AdvantagesMobile.module.sass';
import {advantagesListMobile, advantagesListMobileBranding, advantageTypeMobile} from "../../../../public/staticInfo";
import PopUpText from "../../special/pop-up-text/PopUpText";

const AdvantagesMobile: FunctionComponent<{page?: string}> = ({page}) => {
    const [advantages, setAdvantages] = useState<advantageTypeMobile[]>( page === 'branding' ? advantagesListMobileBranding : advantagesListMobile)
    useEffect( () => {
        advantagesListMobile.forEach((image) => {
            const img = new Image()
            const hoverImage = new Image()
            hoverImage.src = image.hoverSrc
            img.src = image.src
            hoverImage.onload
            img.onload
        })
    }, [])
    return <div className={styles.advantagesBody}>
        {/*Верхний текст*/}
        <div className={styles.advantagesTitleContent}>
            <PopUpText str={'/Преимущества'} threshold={1} boxClassName={styles.advantagesSlash}/>
            <div className={styles.advantagesBigTitle}>
                <PopUpText str={'ПРЕИМУЩЕСТВА'} threshold={1}/>
                <PopUpText str={'MARSERO'} threshold={1}/>
            </div>
            <div className={styles.advantagesLittleTitle}>
                <PopUpText str={'Уникальные'} threshold={1} addDelay={0.01} className={styles.green}/>
                <PopUpText str={' решения.'} addDelay={0.01} startDelay={0.1} threshold={1}/>
                <PopUpText str={' Уникальная'} addDelay={0.01} startDelay={0.19} threshold={1} className={styles.green}/>
                <PopUpText str={' эффективность.'} addDelay={0.01} startDelay={0.3} threshold={1}/>
            </div>
        </div>
        <div className={styles.advantagesBox}>

            {/*Вывод кнопок*/}
            {advantages.map( (a, index) => {
                    if (index == 0) return <div key={index} className={styles.advantageBlockChosen}>
                        <span style={{width: a.positions[5]}}>{a.title}</span>
                        <span style={{width: a.positions[5]}}>{a.text}</span>
                        <img style={{width: a.positions[0], height: a.positions[1], left: a.positions[2], top: a.positions[3],
                        transform: a.positions[4] + 'rotateZ(15deg)'}} src={a.hoverSrc}/>
                    </div>
                    else return <div key={index}
                                     className={a.style == 'common' ? styles.advantageBlock + ' ' + styles.common : styles.advantageBlock + ' ' + styles.reverse}
                                     onClick={() => {
                                         advantages[index] = advantages[0]
                                         advantages[0] = a
                                         setAdvantages([...advantages])

                                     }}>
                        <div><img style={{width: a.defaultPosition[0], height: a.defaultPosition[1]}} src={a.src}/></div>
                        <span style={{width: a.defaultPosition[2]}} className={styles.advantageBlockText}>{a.title}</span>
                    </div>
                }
            )
            }

        </div>
    </div>
}
export default AdvantagesMobile