import {FunctionComponent, useState} from "react";
import styles from './MarseroAdvantages.module.sass'
import {advantagesList, advantagesListWorkingPage} from '../../../../public/staticInfo'
import AdvantagesTitle from "./advantages-title/AdvantagesTitle";
const MarseroAdvantages: FunctionComponent<{page: string}> = ({page}) => {
    const [text, setText] = useState<string>('')
    return <div className={styles.advantagesBody}>

        <AdvantagesTitle/>
        <div className={ page == 'main-page'
            ?
            styles.advantagesBox + ' ' +  styles.mainPageStyle
            :
            styles.advantagesBox + ' ' +  styles.brandingPageStyle
        }>

            {/*Вывод кнопок*/}
            { page == 'main-page'
                ?
                advantagesList.map( (a, index) =>
                <div key={index}
                     className={styles.advantageBlock}
                     onMouseEnter={() => setText(a.text)}
                     style={text !== '' ?  text == a.text ? {opacity: '1'} : { opacity: '0.3'} : {opacity: '0.5'}}>
                        <div><img src={a.src}/><img src={a.hoverSrc}/></div>
                        <span className={styles.advantageBlockText}>{a.title}</span>
                </div>)
                :
                advantagesListWorkingPage.map( (a, index) =>
                    <div key={index}
                         className={styles.advantageBlock}
                         onMouseEnter={() => setText(a.text)}
                         style={text !== '' ?  text == a.text ? {opacity: '1'} : { opacity: '0.3'} : {opacity: '0.5'}}>
                        <div><img src={a.src}/><img src={a.hoverSrc}/></div>
                        <span className={styles.advantageBlockText}>{a.title}</span>
                    </div>)
            }
            {/*Появляющийся текст*/}
            <div className={styles.advantageText}>
                <span>{text}</span>
            </div>
        </div>
    </div>
}
export default MarseroAdvantages;