import {FunctionComponent, useState} from "react";
import MainScreen from "../../main-screen/MainScreen";
import Services from "../../services/Services";
import Photo from "../../photo/Photo";
import Steps from "../../steps/Steps";
import KeyDesign from "../../key-design/KeyDesign";
import MarseroAdvantages from "../../marsero-advantages/MarseroAdvantages";
import Technologies from "../../technologies/Technologies";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import MainScreenMobile from "../../mobile/main-screen-mobile/MainScreenMobile";
import ServicesMobile from "../../mobile/services-mobile/ServicesMobile";
import AdvantagesMobile from "../../mobile/advantages-mobile/AdvantagesMobile";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import { CSSTransition } from  'react-transition-group'
import './../../../index.scss'
import CallPage from "../../mobile/callPage/CallPage";
import { nowPageType } from './../../../../public/staticInfo'

const MainPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')

    return <div>
        {
            isMobile ?
                <div>
                    <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                        <div>
                            <MainScreenMobile setNowPage={setNowPage}/>
                            <ServicesMobile/>
                            <Photo src={'/assets/main-page-photo.png'}/>
                            <Steps isMobile={isMobile} page={'main-page'}/>
                            <AdvantagesMobile/>
                            <Technologies isMobile={isMobile}/>
                            <Ending isMobile={isMobile} page={'main-page'} setNowPage={setNowPage}/>
                            <FooterMobile page={'main-mobile'}/>
                        </div>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                        <PagesSwitcher page={'main'} setNowPage={setNowPage}/>
                    </CSSTransition>
                    <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                        <CallPage setNowPage={setNowPage}/>
                    </CSSTransition>
                </div>
                :
                <div>
                        <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                            <div>
                                <MainScreen setNowPge={setNowPage}/>
                                <Services/>
                                <Photo src={'/assets/Group.png'}/>
                                <div style={{margin: '16.66vw 0 17.604vw 0'}}>
                                    <Steps isMobile={isMobile} page={'main-page'}/>
                                </div>
                                <KeyDesign setNowPage={setNowPage} page={'main-page'}/>
                                <div style={{margin: '17.6vw 0 16.19vw 0'}}>
                                    <MarseroAdvantages page={'main-page'}/>
                                </div>
                                <Technologies isMobile={isMobile}/>
                                <div style={{margin: '12.03vw 0 10.41vw 0'}}>
                                    <Ending isMobile={isMobile} setNowPage={setNowPage} page={'main-page'}/>
                                </div>
                                <Footer/>
                            </div>
                        </CSSTransition>
                        <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                            <DiscussScreen setNowPage={setNowPage}/>
                        </CSSTransition>
                </div>
        }

    </div>
}
export default MainPage;