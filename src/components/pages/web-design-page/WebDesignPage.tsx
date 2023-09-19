import {FunctionComponent, useState} from "react";
import WebDesignScreen from "../../web-design-screen/WebDesignScreen";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import KeyDesign from "../../key-design/KeyDesign";
import Categories from "../../categories/Categories";
import Circles from "../../circles/Circles";
import Steps from "../../steps/Steps";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {nowPageType} from "../../../../public/staticInfo";
import {CSSTransition} from "react-transition-group";

const WebDesignPage: FunctionComponent = () => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <WebDesignScreen setNowPage={setNowPage}/>
                <Categories page={'design'}/>
                <Circles page={'design'}/>
                <KeyDesign setNowPage={setNowPage} page={'design'}/>
                <Steps page={'design'}/>
                <Ending setNowPage={setNowPage} page={'design'}/>
                <Footer/>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
            <DiscussScreen setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default WebDesignPage