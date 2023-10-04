import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import WebDesignMobileScreen from "../../../mobile/web-design-mobile-screen/WebDesignMobileScreen";
import CategoriesMobile from "../../../mobile/category-mobile/CategoryMobile";
import KeyDesignMobile from "../../../mobile/keyDesignMobile/KeyDesignMobile";
import styles from "../web-design-page.module.sass";
import Steps from "../../../share/steps/Steps";
import {
    nowPageType,
    setNowPageType,
    workStepsDesignPageMobile
} from "../../../../../public/staticInfo";
import Ending from "../../../share/ending/Ending";
import FooterMobile from "../../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../../mobile/callPage/CallPage";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
    setNowPage: setNowPageType
    isMobile: boolean
}
const WebDesignPageMobile: FunctionComponent<IProps> = ({nowPage, setNowPage, isMobile, setPosition}) => {
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <WebDesignMobileScreen setPosition={setPosition} setNowPage={setNowPage}/>
                <CategoriesMobile page={'design'}/>
                <div style={{margin: '-15.27vw 0 0 0'}}>
                    <KeyDesignMobile page={'design'}/>
                </div>
                <div className={styles.stickyBody}>
                    <div className={styles.stickyBlock}>
                        <Steps stepList={workStepsDesignPageMobile} cef={9.7} isMobile={isMobile} page={'design'}/>
                        <div style={{margin: '-36.38vw 0 0 0'}}>
                            <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'design'}/>
                        </div>
                        <FooterMobile/>
                    </div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <PagesSwitcher page={'design'} setNowPage={setNowPage}/>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <CallPage setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default WebDesignPageMobile