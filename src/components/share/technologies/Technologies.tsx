import {FunctionComponent} from "react";
import { techSrcList } from '../../../../public/staticInfo'
import styles from './Technologies.module.sass'
import PopUpText from "../../special/pop-up-text/PopUpText";

const Technologies: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    return <div className={styles.techBody}>
        {isMobile ?
            <div>
                <PopUpText str={'ТЕХНОЛОГИИ'} threshold={1} className={styles.techTitle}/>
                <PopUpText str={'И ПЛАТФОРМЫ'} threshold={1} className={styles.techTitle}/>
            </div>            :
            <PopUpText str={'ТЕХНОЛОГИИ И ПЛАТФОРМЫ'} threshold={1} className={styles.techTitle} addDelay={0.02}/>
        }
        <div className={styles.techContent}>
            { techSrcList.map( (src, index) =>
                isMobile && index == 14 ? ''
                    :
                <div key={index}>
                    <img src={src} key={index}/>
                </div>)
            }
        </div>
    </div>
}
export default Technologies