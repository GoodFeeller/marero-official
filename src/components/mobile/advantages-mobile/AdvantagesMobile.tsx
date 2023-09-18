import {FunctionComponent, useState} from "react";
import styles from './AdvantagesMobile.module.sass';
import {advantagesListMobile, advantageTypeMobile} from "../../../../public/staticInfo";

const AdvantagesMobile: FunctionComponent = () => {
    const [advantages, setAdvantages] = useState<advantageTypeMobile[]>(advantagesListMobile)
    return <div className={styles.advantagesBody}>
        {/*Верхний текст*/}
        <div className={styles.advantagesTitleContent}>
            <span className={styles.advantagesSlash}>/Преимущества</span>
            <span className={styles.advantagesBigTitle}>ПРЕИМУЩЕСТВА<br/>MARSERO</span>
            <span className={styles.advantagesLittleTitle}>
                <span className={styles.green}>Уникальные</span> решения.
                <span className={styles.green}>Уникальная</span> эффективность.
            </span>
        </div>
        <div className={styles.advantagesBox}>

            {/*Вывод кнопок*/}
            {advantages.map( (a, index) => {
                    if (index == 0) return <div className={styles.advantageBlockChosen}>
                        <span>{a.title}</span>
                        <span>{a.text}</span>
                        <img src={a.hoverSrc}/>
                    </div>
                    else return <div key={index}
                                     className={a.style == 'common' ? styles.advantageBlock + ' ' + styles.common : styles.advantageBlock + ' ' + styles.reverse}
                                     onClick={() => {
                                         advantages[index] = advantages[0]
                                         advantages[0] = a
                                         setAdvantages([...advantages])

                                     }}>
                        <div><img src={a.src}/></div>
                        <span className={styles.advantageBlockText}>{a.title}</span>
                    </div>
                }
            )
            }

        </div>
    </div>
}
export default AdvantagesMobile