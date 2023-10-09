import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import MainScreenMobile from "../../../mobile/main-screen-mobile/MainScreenMobile";
import ServicesMobile from "../../../mobile/services-mobile/ServicesMobile";
import styles from "../main-page.module.sass";
import Steps from "../../../share/steps/Steps";
import {nowPageType, setNowPageType, workSteps} from "../../../../../public/staticInfo";
import AdvantagesMobile from "../../../mobile/advantages-mobile/AdvantagesMobile";
import Technologies from "../../../share/technologies/Technologies";
import Ending from "../../../share/ending/Ending";
import FooterMobile from "../../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../../mobile/callPage/CallPage";
import GrowingPhoto from "../../../special/growingPhoto/GrowingPhoto";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void,
    setNowPage: setNowPageType,
    isMobile: boolean
}
const MobileMainPage: FunctionComponent<IProps> = ({nowPage, setNowPage, setPosition, isMobile}) => {
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <MainScreenMobile setPosition={setPosition} setNowPage={setNowPage}/>
                <div style={{margin: '-10.55vw 0 0 0'}}>
                    <ServicesMobile/>
                </div>
                <GrowingPhoto height={111} smallSrc={'/assets/big-photos/main-page-photo-small.png'} src={'/assets/big-photos/main-page-photo.png'}/>
                <div className={styles.stickyBody}>
                    <div className={styles.stickyBlock}>
                        <div style={{margin: '0 0 -24.44vw 0'}}>
                            <Steps stepList={workSteps} cef={5.6} isMobile={isMobile} page={'main-page'}/>
                        </div>
                        <AdvantagesMobile/>
                        <Technologies isMobile={isMobile}/>
                        <Ending setPosition={setPosition} isMobile={isMobile} page={'main-page'} setNowPage={setNowPage}/>
                        <FooterMobile/>
                    </div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <PagesSwitcher page={'main'} setNowPage={setNowPage}/>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <CallPage setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default MobileMainPage