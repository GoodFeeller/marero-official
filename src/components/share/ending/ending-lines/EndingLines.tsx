import {FunctionComponent, memo} from "react";
import styles from "../Ending.module.sass";
import {useInView} from "react-intersection-observer";

const EndingLines: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const {ref, inView} = useInView({
        threshold: 0.4
    })
    return <div ref={ref} className={inView ? styles.back + ' ' + styles.animateBack : styles.back}>
        <div className={styles.firstLine}/>
        <div className={styles.secondLine}/>
        <div className={styles.thirdLine}/>
        <div className={styles.firstDot}/>
        <div className={styles.secondDot}/>
        <span className={styles.firstSpan}>Уникальный дизайн</span>
        { isMobile ?
            <span className={styles.secondSpan}>Техподдержка</span>
            :
            <span className={styles.secondSpan}>Техподдержка и консультация</span>
        }
    </div>
}
export default memo(EndingLines)