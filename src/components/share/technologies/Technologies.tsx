import {FunctionComponent} from "react";
import { techSrcList } from '../../../../public/staticInfo'
import styles from './Technologies.module.sass'
import PopUpText from "../../special/pop-up-text/PopUpText";
import PopUpPhoto from "../../special/PopUpPhoto/PopUpPhoto";

const Technologies: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    return <div className={styles.techBody}>
        {isMobile ?
            <div>
                <PopUpText str={'ТЕХНОЛОГИИ'} threshold={1} className={styles.techTitle}/>
                <PopUpText str={'И ПЛАТФОРМЫ'} threshold={1} className={styles.techTitle}/>
            </div>            :
            <PopUpText str={'ТЕХНОЛОГИИ И ПЛАТФОРМЫ'} threshold={1} boxClassName={styles.techTitle} addDelay={0.02}/>
        }
        <div className={styles.techContent}>
            { techSrcList.map( (src, index) =>
                isMobile && index == 14 ? ''
                    :
                    <PopUpPhoto addDelay={index * 0.1} src={src} threshold={1} key={index}/>
                )
            }
        </div>
    </div>
}
export default Technologies