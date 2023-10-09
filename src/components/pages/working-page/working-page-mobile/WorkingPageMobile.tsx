import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import WorkingMobilePage from "../../../mobile/working-mobile-page/WorkingMobilePage";
import CategoriesMobile from "../../../mobile/category-mobile/CategoryMobile";
import Steps from "../../../share/steps/Steps";
import {nowPageType, setNowPageType, workStepsWorkingPageMobile} from "../../../../../public/staticInfo";
import AdvantagesMobile from "../../../mobile/advantages-mobile/AdvantagesMobile";
import Technologies from "../../../share/technologies/Technologies";
import Ending from "../../../share/ending/Ending";
import FooterMobile from "../../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../../mobile/callPage/CallPage";
import styles from "../WorkingPage.module.sass";
import GrowingPhoto from "../../../special/growingPhoto/GrowingPhoto";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
    setNowPage: setNowPageType
    isMobile: boolean
}
const WorkingPageMobile: FunctionComponent<IProps> = ({nowPage, setNowPage, isMobile, setPosition}) => {
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <WorkingMobilePage setPosition={setPosition} setNowPage={setNowPage}/>
                <CategoriesMobile page={'working'}/>
                <GrowingPhoto height={111} smallSrc={'/assets/big-photos/workingPagePhotoMobile-small.png'}
                       src={'/assets/big-photos/workingPagePhotoMobile.png'}/>
                <div className={styles.stickyBody}>
                    <div className={styles.stickyBlock}>
                        <div style={{margin: '0 0 -24.44vw 0'}}>
                            <Steps stepList={workStepsWorkingPageMobile} cef={7} isMobile={isMobile}
                                   page={'working-mobile'}/>
                        </div>
                        <AdvantagesMobile/>
                        <Technologies isMobile={isMobile}/>
                        <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'working'}/>
                        <FooterMobile/>
                    </div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <PagesSwitcher page={'working'} setNowPage={setNowPage}/>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <CallPage setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default WorkingPageMobile