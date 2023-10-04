import {FunctionComponent, useEffect, useRef} from "react";
import styles from './Steps.module.sass'
import {workType} from '../../../../public/staticInfo'
import StepsTitle from "./steps-title/StepsTitle";

interface IProps {
    page: string,
    isMobile: boolean,
    cef: number,
    stepList: workType[]
}
const Steps: FunctionComponent<IProps> = ({page, isMobile, cef, stepList}) => {
    const ref = useRef<HTMLDivElement | null>(null)


    useEffect( () => {
        const scrollTo: () => void = () => {
            let scrollCef = isMobile ? 4 : 2
            if (ref.current) {
                let scroll: number = (window.scrollY - (cef * window.innerWidth)) / (scrollCef * window.innerWidth) * ref.current.scrollWidth
                ref.current?.scrollTo({left: scroll, top: 0, behavior: 'auto'})
            }
        }
            window.addEventListener('scroll', scrollTo)
            return () => window.removeEventListener('scroll', scrollTo)
    }, [])
    return <div className={
        page == 'about-mobile' ? styles.stepsBody + ' ' + styles.aboutBack : styles.stepsBody }>
        <StepsTitle page={page}/>
        <div className={styles.scrollBody}>
            <div ref={ref} className={styles.stepScrollBox}>
                {
                    stepList.map( (s, index) => <div
                        key={index}
                        className={page == 'about-mobile' ? styles.stepAbout : page == 'working' || page == 'working-mobile' ||
                        ( page == 'design' && isMobile) ? styles.workingStep : styles.step}
                    >
                        <span>{s.id}</span>
                        <span>{s.title}</span>
                        <span>{s.text}</span>
                    </div>)

                }
            </div>
            <div className={styles.shadow}/>
        </div>
    </div>
}
export default Steps;