import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import BrandingScreen from "../../../desctop/branding-screen/BrandingScreen";
import BuisnessActivity from "../../../share/buisness-activity/BuisnessActivity";
import MarseroAdvantages from "../../../desctop/marsero-advantages/MarseroAdvantages";
import KeyDesign from "../../../desctop/key-design/KeyDesign";
import Ending from "../../../share/ending/Ending";
import Footer from "../../../desctop/footer/Footer";
import DiscussScreen from "../../../desctop/discuss-screen/DiscussScreen";
import {nowPageType, setNowPageType} from "../../../../../public/staticInfo";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void,
    setNowPage: setNowPageType,
    isMobile: boolean
}
const BrandingPageDesktop: FunctionComponent<IProps> = ({nowPage, setNowPage, setPosition, isMobile}) => {
    return <div>
        <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <BrandingScreen setPosition={setPosition} setNowPage={setNowPage}/>
                <BuisnessActivity isMobile={isMobile}/>
                <div style={{margin: '4.16vw 0 22.23vw 0'}}>
                    <MarseroAdvantages page={'branding'}/>
                </div>
                <KeyDesign page={'branding'}/>
                <div style={{margin: '0 0 10.4vw 0'}}>
                    <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'branding'}/>
                </div>
                <Footer/>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <DiscussScreen setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default BrandingPageDesktop