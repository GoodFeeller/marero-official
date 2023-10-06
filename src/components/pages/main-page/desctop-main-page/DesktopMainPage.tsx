import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import MainScreen from "../../../desctop/main-screen/MainScreen";
import Services from "../../../desctop/services/Services";
import styles from "../main-page.module.sass";
import Steps from "../../../share/steps/Steps";
import {nowPageType, setNowPageType, workSteps} from "../../../../../public/staticInfo";
import KeyDesign from "../../../desctop/key-design/KeyDesign";
import MarseroAdvantages from "../../../desctop/marsero-advantages/MarseroAdvantages";
import Technologies from "../../../share/technologies/Technologies";
import Ending from "../../../share/ending/Ending";
import Footer from "../../../desctop/footer/Footer";
import DiscussScreen from "../../../desctop/discuss-screen/DiscussScreen";
import BigPhoto from "../../../special/big-photo/BigPhoto";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void,
    setNowPage: setNowPageType,
    isMobile: boolean
}
const DesktopMainPage: FunctionComponent<IProps> = ({nowPage, setNowPage, setPosition, isMobile}) => {
    return <div>
        <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <MainScreen setNowPage={setNowPage} setPosition={setPosition}/>
                <Services/>
                <BigPhoto position={0.397} smallSrc={'/assets/big-photos/Group_small.png'} src={'/assets/big-photos/Group.png'}/>
                <div className={styles.stickyBodyDesktop}>
                    <div className={styles.stickyBlockDesktop}>
                        <div style={{margin: '16.66vw 0 17.604vw 0'}}>
                            <Steps stepList={workSteps} cef={1.76} isMobile={isMobile} page={'main-page'}/>
                        </div>
                        <KeyDesign page={'main-page'}/>
                        <div style={{margin: '17.6vw 0 16.19vw 0'}}>
                            <MarseroAdvantages page={'main-page'}/>
                        </div>
                        <Technologies isMobile={isMobile}/>
                        <div style={{margin: '12.03vw 0 10.41vw 0'}}>
                            <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'main-page'}/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
            <DiscussScreen setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default DesktopMainPage