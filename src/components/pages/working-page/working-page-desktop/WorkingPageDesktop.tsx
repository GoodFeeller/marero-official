import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import WorkingPageScreen from "../../../desctop/working-page-screen/WorkingPageScreen";
import Categories from "../../../desctop/categories/Categories";
import Circles from "../../../desctop/circles/Circles";
import MarseroAdvantages from "../../../desctop/marsero-advantages/MarseroAdvantages";
import Steps from "../../../share/steps/Steps";
import {nowPageType, setNowPageType, workStepsDesignPage} from "../../../../../public/staticInfo";
import Technologies from "../../../share/technologies/Technologies";
import Ending from "../../../share/ending/Ending";
import Footer from "../../../desctop/footer/Footer";
import DiscussScreen from "../../../desctop/discuss-screen/DiscussScreen";
import styles from "../WorkingPage.module.sass"
import BigPhoto from "../../../special/big-photo/BigPhoto";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void
    setNowPage: setNowPageType
    isMobile: boolean
}
const WorkingPageDesktop: FunctionComponent<IProps> = ({nowPage, setNowPage, isMobile, setPosition}) => {
    return  <div>
        <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <WorkingPageScreen setPosition={setPosition} setNowPage={setNowPage}/>
                <div style={{margin: '10.41vw 0 20.625vw 0'}}>
                    <Categories page={'working'}/>
                </div>
                <Circles page={'working'}/>
                <div style={{margin: '24.53vw 0 18.33vw 0'}}>
                    <MarseroAdvantages page={'main-page'}/>
                </div>
                <BigPhoto elemPos={2.427} smallSrc={'/assets/big-photos/workingPhoto-small.png'}
                       src={'/assets/big-photos/workingPhoto.png'}/>
                <div className={styles.stickyBodyDesktop}>
                    <div className={styles.stickyBlockDesktop}>
                        <div style={{margin: '19.79vw 0 19.27vw 0'}}>
                            <Steps stepList={workStepsDesignPage} cef={3.3} isMobile={isMobile} page={'working'}/>
                        </div>
                        <Technologies isMobile={isMobile}/>
                        <div style={{margin: '10.72vw 0 10.41vw 0'}}>
                            <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage}
                                    page={'working'}/>
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
export default WorkingPageDesktop