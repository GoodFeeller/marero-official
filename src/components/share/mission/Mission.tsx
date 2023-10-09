import {FunctionComponent} from "react";
import styles from './Mission.module.sass'
import PopUpText from "../../special/pop-up-text/PopUpText";

const Mission: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    return <div className={styles.missionBody}>
        <div className={styles.littleTitle}>
            <PopUpText str={isMobile ? 'МИССИЯ' : '/Миссия'} threshold={1}/>
        </div>
        <div className={styles.text}>
            {
                isMobile ?
                    <div>
                        <PopUpText str={'Обеспечить наших клиентов лучшими'} addDelay={0.01} threshold={1}/>
                        <PopUpText str={'решениями в сфере информационных'} addDelay={0.01} threshold={1}/>
                        <PopUpText str={'технологий, путем создания уникальных,'} addDelay={0.01} threshold={1}/>
                        <PopUpText str={'ярких и продуманных до мелочей'} addDelay={0.01} threshold={1}/>
                        <PopUpText str={'продающих продуктов.'} addDelay={0.01} threshold={1}/>
                    </div>
                    :
                    <div>
                        <div>
                            <PopUpText str={'Обеспечить наших клиентов'} addDelay={0.01} threshold={1}/>
                            <PopUpText str={' лучшими решениями'} addDelay={0.01} startDelay={0.25} threshold={1} className={styles.green}/>
                        </div>
                        <PopUpText str={'в сфере информационных технологий, путем создания'} addDelay={0.01} threshold={1}/>
                        <PopUpText str={'уникальных, ярких и продуманных до мелочей'} addDelay={0.01} threshold={1}/>
                        <PopUpText str={'продающих продуктов.'} addDelay={0.01} threshold={1}/>
                    </div>
            }
        </div>
    </div>
}
export default Mission