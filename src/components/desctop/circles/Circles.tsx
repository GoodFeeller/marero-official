import {FunctionComponent, useEffect, useState} from "react";
import { circlesList, circleListWorkingPage } from '../../../../public/staticInfo'
import styles from './Circles.module.sass'
import CircleSVG from "./circle-svg/CircleSVG";
import {useInView} from "react-intersection-observer";
const Circles: FunctionComponent<{page: string}> = ({ page }) => {
    const {ref, inView} = useInView({
        threshold: 0.1
    })
    const [animate, setAnimate] = useState<boolean>(false)
    useEffect(() => {if(inView && !animate) setAnimate(true)}, [inView])
    return <div ref={ref} className={animate ? styles.circleBody + ' ' + styles.animate : styles.circleBody}>

        {   page == 'design' ?
            circlesList.map( (elem, index) =>
                <div style={{animationDelay: `${index == 0 ? 0 : index * 0.4 + 0.4}s`}} key={index} className={styles.circleBox}>
                    <CircleSVG offset={index == 0 ? '-50' : '265'} delay={index == 0 ? '0s' : `${index * 0.4 + 0.4}s`}/>
                    <div><img style={{animationDelay: `${index * 0.4 + 1.6}s`}} className={styles.imageBox} src={elem}/></div>
                </div>
            )
            :
            circleListWorkingPage.map( (elem, index) =>
                <div style={{animationDelay: `${index == 0 ? 0 : index * 0.4 + 0.4}s`}} key={index} className={styles.circleBox}>
                    <CircleSVG offset={index == 0 ? '-50' : '265'} delay={index == 0 ? '0s' : `${index * 0.4 + 0.4}s`}/>
                    <div><img style={{animationDelay: `${index * 0.4 + 1.6}s`}} className={styles.imageBox} src={elem}/></div>
                </div>
            )
        }
    </div>
}

export default Circles;