import {FunctionComponent} from "react";
import styles from './Mission.module.sass'

const Mission: FunctionComponent = () => {
    return <div className={styles.missionBody}>
        <div className={styles.littleTitle}>
            <span>/Миссия</span>
        </div>
        <div className={styles.text}>
            <span>
                Обеспечить наших клиентов <span className={styles.green}>лучшими решениями</span> в сфере информационных
                технологий, путем создания уникальных, ярких и продуманных до мелочей продающих продуктов.
            </span>
        </div>
    </div>
}
export default Mission