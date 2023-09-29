import {FunctionComponent, useEffect, useRef} from "react";
import styles from './Steps.module.sass'
import {
    valuesList,
    workSteps,
    workStepsDesignPage, workStepsDesignPageMobile,
    workStepsWorkingPage,
    workStepsWorkingPageMobile
} from '../../../public/staticInfo'

interface IProps {
    page: string,
    isMobile: boolean,
    cef: number,
}
const Steps: FunctionComponent<IProps> = ({page, isMobile, cef}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const stepList = page == 'main-page' ? workSteps :
        page == 'about-mobile' ? valuesList : page == 'working' ? workStepsWorkingPage :
            page == 'working-mobile' ? workStepsWorkingPageMobile :
                (page == 'design' && isMobile) ? workStepsDesignPageMobile : workStepsDesignPage


    useEffect( () => {
        const scrollTo: () => void = () => {
            let scrollCef = isMobile ? 2 : 1
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
        <div className={styles.stepsTitle}>
            {
                page == 'about-mobile'
                ?
                    <span className={styles.titleBig}>ЦЕННОСТИ</span>
                    :
                    <div>
                        <span className={styles.titleLittle}>/Этапы работы</span>
                        <span className={styles.titleBig}>ПРОЗРАЧНЫЕ<br/>ЭТАПЫ РАБОТЫ</span>
                    </div>
            }
        </div>
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