import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import BrandingMobileScreen from "../../../mobile/branding-mobile-page/BrandingMobilePage";
import BuisnessActivity from "../../../share/buisness-activity/BuisnessActivity";
import AdvantagesMobile from "../../../mobile/advantages-mobile/AdvantagesMobile";
import KeyDesignMobile from "../../../mobile/keyDesignMobile/KeyDesignMobile";
import Ending from "../../../share/ending/Ending";
import FooterMobile from "../../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../../mobile/callPage/CallPage";
import {nowPageType, setNowPageType} from "../../../../../public/staticInfo";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void,
    setNowPage: setNowPageType,
    isMobile: boolean
}
const BrandingPageMobile: FunctionComponent<IProps> = ({nowPage, setNowPage, setPosition, isMobile}) => {
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <BrandingMobileScreen setPosition={setPosition} setNowPage={setNowPage}/>
                <BuisnessActivity isMobile={isMobile}/>
                <AdvantagesMobile page={'branding'}/>
                <div style={{margin: '55.55vw 0 0 0'}}>
                    <KeyDesignMobile  page={'branding'}/>
                </div>
                <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'branding'}/>
                <FooterMobile/>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <PagesSwitcher page={'branding'} setNowPage={setNowPage}/>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <CallPage setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default BrandingPageMobile