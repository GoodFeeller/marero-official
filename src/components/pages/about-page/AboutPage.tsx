import {FunctionComponent, useState} from "react";
import AboutScreen from "../../about-screen/AboutScreen";
import Mission from "../../mission/Mission";
import Photo from "../../photo/Photo";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import Value from "../../value/Value";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {CSSTransition} from "react-transition-group";
import {nowPageType} from "../../../../public/staticInfo";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../mobile/callPage/CallPage";
import AboutMobile from "../../mobile/about-mobile/AboutMobile";
import Steps from "../../steps/Steps";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";

const AboutPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    return <div>
        {
            isMobile ?
                <div>
                    <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
                        <div>
                            <AboutMobile setNowPage={setNowPage}/>
                            <Mission isMobile={isMobile}/>
                            <Photo src={'/assets/aboutMobilePhoto.png'}/>
                            <Steps page={'about-mobile'}/>
                            <div style={{transform: 'translateY(-64.6vw)'}}>
                                <Ending isMobile={isMobile} setNowPage={setNowPage} page={'about'}/>
                            </div>
                            <FooterMobile page={'about-mobile'}/>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'pageChanger'} timeout={500} classNames='mobilePageChanger'  unmountOnExit>
                        <PagesSwitcher page={'about'} setNowPage={setNowPage}/>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'callPage'} timeout={500} classNames='mobilePageChanger'  unmountOnExit>
                        <CallPage setNowPage={setNowPage}/>
                    </CSSTransition>
                </div>
                :
                <div>
                    <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
                        <div>
                            <AboutScreen setNowPage={setNowPage}/>
                            <Mission isMobile={isMobile}/>
                            <Photo src={'/assets/Group.png'}/>
                            <Value/>
                            <Ending isMobile={isMobile} setNowPage={setNowPage} page={'about'}/>
                            <Footer/>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'callPage'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
                        <DiscussScreen setNowPage={setNowPage}/>
                    </CSSTransition>
                </div>
        }
    </div>
}
export default AboutPage;