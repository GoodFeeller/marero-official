import {FunctionComponent, useEffect, useState} from "react";
import styles from './AdvantagesMobile.module.sass';
import {advantagesListMobile, advantagesListMobileBranding, advantageTypeMobile} from "../../../../public/staticInfo";

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
            <span className={styles.advantagesSlash}>/Преимущества</span>
            <span className={styles.advantagesBigTitle}>ПРЕИМУЩЕСТВА<br/>MARSERO</span>
            <span className={styles.advantagesLittleTitle}>
                <span className={styles.green}>Уникальные</span> решения.
                <span className={styles.green}> Уникальная</span> эффективность.
            </span>
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