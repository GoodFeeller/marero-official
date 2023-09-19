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

const BrandingPage: FunctionComponent = () => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')

    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <BrandingScreen setNowPage={setNowPage}/>
                <BuisnessActivity/>
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
export default BrandingPage;