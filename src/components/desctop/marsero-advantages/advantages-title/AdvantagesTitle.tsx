import {FunctionComponent, memo} from "react";
import styles from "../MarseroAdvantages.module.sass";

const AdvantagesTitle: FunctionComponent = () => {
    return <div className={styles.advantagesTitleBox}>
        <div/>
        <div className={styles.advantagesTitleContent}>
            <span className={styles.advantagesBigTitle}>ПРЕИМУЩЕСТВА<br/>MARSERO</span>
            <span className={styles.advantagesLittleTitle}>
                    <span className={styles.green}>Уникальные</span> решения.
                    <span className={styles.green}> Уникальная</span> эффективность.
                </span>
        </div>
    </div>
}
export default memo(AdvantagesTitle)