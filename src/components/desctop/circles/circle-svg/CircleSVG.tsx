import {FunctionComponent} from "react";
import styles from '../Circles.module.sass'

interface IProps {
    offset: string
    delay: string
}
const CircleSVG: FunctionComponent<IProps> = ({offset, delay}) => {

    return <div className={styles.svgBody}>
        <svg viewBox={"0 0 200 200"}>
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: 'rgba(47, 47, 47, 1)'}}/>
                    <stop offset="100%" style={{stopColor: 'rgba(91, 91, 91, 0.2)'}}/>
                </linearGradient>
            </defs>
            <circle style={{strokeDashoffset: offset, animationDelay: delay}} stroke={'url(#grad1)'} className={styles.circleSVG} cx={100} cy={100} r={99}/>
        </svg>
    </div>
}
export default CircleSVG