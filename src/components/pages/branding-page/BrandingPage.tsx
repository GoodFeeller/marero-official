import {FunctionComponent, useState} from "react";
import BrandingScreen from "../../branding-screen/BrandingScreen";
import BuisnessActivity from "../../buisness-activity/BuisnessActivity";
import MarseroAdvantages from "../../marsero-advantages/MarseroAdvantages";
import KeyDesign from "../../key-design/KeyDesign";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {nowPageType} from "../../../../public/staticInfo";
import {CSSTransition} from "react-transition-group";
import KeyDesignMobile from "../../mobile/keyDesignMobile/KeyDesignMobile";
import Steps from "../../steps/Steps";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../mobile/callPage/CallPage";
import BrandingMobileScreen from "../../mobile/branding-mobile-page/BrandingMobilePage";
import AdvantagesMobile from "../../mobile/advantages-mobile/AdvantagesMobile";

const BrandingPage: FunctionComponent = () => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const isMobile = window.screen.availWidth <= 560
    return <div>
        { isMobile
            ?
            <div>
                <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
                    <div>
                        <BrandingMobileScreen setNowPage={setNowPage}/>
                        <BuisnessActivity isMobile={isMobile}/>
                        <AdvantagesMobile/>
                        <KeyDesignMobile page={'branding'}/>
                        <Steps page={'branding'}/>
                        <Ending setNowPage={setNowPage} page={'branding'}/>
                        <FooterMobile page={'branding'}/>
                    </div>
                </CSSTransition>
                <CSSTransition in={nowPage == 'pageChanger'} timeout={500} classNames='mobilePageChanger'  unmountOnExit>
                    <PagesSwitcher page={'branding'} setNowPage={setNowPage}/>
                </CSSTransition>
                <CSSTransition in={nowPage == 'callPage'} timeout={500} classNames='mobilePageChanger'  unmountOnExit>
                    <CallPage setNowPage={setNowPage}/>
                </CSSTransition>
            </div>
            :
            <div>
                <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
                    <div>
                        <BrandingScreen setNowPage={setNowPage}/>
                        <BuisnessActivity isMobile={isMobile}/>
                        <MarseroAdvantages page={'branding'}/>
                        <KeyDesign setNowPage={setNowPage} page={'branding'}/>
                        <Ending setNowPage={setNowPage} page={'branding'}/>
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
export default BrandingPage;