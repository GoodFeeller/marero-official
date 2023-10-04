import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import AboutMobile from "../../../mobile/about-mobile/AboutMobile";
import Mission from "../../../share/mission/Mission";
import Photo from "../../../share/photo/Photo";
import styles from "../about-page.module.sass";
import Steps from "../../../share/steps/Steps";
import Ending from "../../../share/ending/Ending";
import FooterMobile from "../../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../../mobile/callPage/CallPage";
import {nowPageType, setNowPageType, valuesList} from "../../../../../public/staticInfo";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void,
    setNowPage: setNowPageType,
    isMobile: boolean
}
const AboutPageMobile: FunctionComponent<IProps> = ({nowPage, setNowPage, setPosition, isMobile}) => {
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <AboutMobile setPosition={setPosition} setNowPage={setNowPage}/>
                <Mission isMobile={isMobile}/>
                <Photo smallSrc={'/assets/big-photos/aboutMobilePhoto-small.png'} src={'/assets/big-photos/aboutMobilePhoto.png'}/>
                <div className={styles.stickyBody}>
                    <div className={styles.stickyBlock}>
                        <Steps stepList={valuesList} cef={5.5} isMobile={isMobile} page={'about-mobile'}/>
                        <div style={{margin: '-66.6vw 0 0 0'}}>
                            <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'about'}/>
                        </div>
                        <FooterMobile/>
                    </div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <PagesSwitcher page={'about'} setNowPage={setNowPage}/>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <CallPage setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default AboutPageMobile