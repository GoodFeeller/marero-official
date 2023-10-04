import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import WebDesignScreen from "../../../desctop/web-design-screen/WebDesignScreen";
import Categories from "../../../desctop/categories/Categories";
import Circles from "../../../desctop/circles/Circles";
import KeyDesign from "../../../desctop/key-design/KeyDesign";
import styles from "../web-design-page.module.sass";
import Steps from "../../../share/steps/Steps";
import {
    nowPageType,
    setNowPageType,
    workStepsDesignPage
} from "../../../../../public/staticInfo";
import Ending from "../../../share/ending/Ending";
import Footer from "../../../desctop/footer/Footer";
import DiscussScreen from "../../../desctop/discuss-screen/DiscussScreen";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
    setNowPage: setNowPageType
    isMobile: boolean
}
const WebDesignPageDesktop: FunctionComponent<IProps> = ({nowPage, setNowPage, isMobile, setPosition}) => {
    return <div>
        <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <WebDesignScreen setPosition={setPosition} setNowPage={setNowPage}/>
                <div style={{margin: '10.41vw 0 24.53vw 0'}}>
                    <Categories page={'design'}/>
                </div>
                <Circles page={'design'}/>
                <div style={{margin: '19.27vw 0'}}>
                    <KeyDesign page={'design'}/>
                </div>
                <div className={styles.stickyBodyDesktop}>
                    <div className={styles.stickyBlockDesktop}>
                        <Steps stepList={workStepsDesignPage} cef={2.65} isMobile={isMobile} page={'design'}/>
                        <div style={{margin: '13.33vw 0 10.41vw 0'}}>
                            <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'design'}/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <DiscussScreen setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default WebDesignPageDesktop