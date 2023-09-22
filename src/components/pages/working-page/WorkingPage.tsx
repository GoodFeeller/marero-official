import {FunctionComponent, useState} from "react";
import MarseroAdvantages from "../../marsero-advantages/MarseroAdvantages";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import WorkingPageScreen from "../../working-page-screen/WorkingPageScreen";
import Categories from "../../categories/Categories";
import Circles from "../../circles/Circles";
import Photo from "../../photo/Photo";
import Steps from "../../steps/Steps";
import Technologies from "../../technologies/Technologies";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {nowPageType} from "../../../../public/staticInfo";
import {CSSTransition} from "react-transition-group";
import PagesSwitcher from "../../mobile/pages-switcher/PagesSwitcher";
import CallPage from "../../mobile/callPage/CallPage";
import WorkingMobilePage from "../../mobile/working-mobile-page/WorkingMobilePage";
import CategoriesMobile from "../../mobile/category-mobile/CategoryMobile";
import AdvantagesMobile from "../../mobile/advantages-mobile/AdvantagesMobile";
import FooterMobile from "../../mobile/footer-mobile/FooterMobile";

const WorkingPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    return <div>
        { isMobile
            ?
            <div>
                <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                    <div>
                        <WorkingMobilePage setNowPage={setNowPage}/>
                        <CategoriesMobile page={'working'}/>
                        <Photo src={'/assets/workingPagePhotoMobile.png'}/>
                        <Steps isMobile={isMobile} page={'working-mobile'}/>
                        <AdvantagesMobile/>
                        <Technologies isMobile={isMobile}/>
                        <Ending isMobile={isMobile} setNowPage={setNowPage} page={'working'}/>
                        <FooterMobile page={'working'}/>
                    </div>
                </CSSTransition>
                <CSSTransition in={nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                    <PagesSwitcher page={'working'} setNowPage={setNowPage}/>
                </CSSTransition>
                <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger'  unmountOnExit>
                    <CallPage setNowPage={setNowPage}/>
                </CSSTransition>
            </div>
            :
            <div>
                <CSSTransition in={nowPage == 'common'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                    <div>
                        <WorkingPageScreen setNowPage={setNowPage}/>
                        <div style={{margin: '10.41vw 0 20.625vw 0'}}>
                        <Categories page={'working'}/>
                        </div>
                        <Circles page={'working'}/>
                        <div style={{margin: '24.53vw 0 18.33vw 0'}}>
                        <MarseroAdvantages page={'main-page'}/>
                        </div>
                        <Photo src={'/assets/workingPhoto.svg'}/>
                        <div style={{margin: '19.79vw 0 19.27vw 0'}}>
                        <Steps isMobile={isMobile} page={'working'}/>
                        </div>
                        <Technologies isMobile={isMobile}/>
                        <div style={{margin: '10.72vw 0 10.41vw 0'}}>
                        <Ending isMobile={isMobile} setNowPage={setNowPage} page={'working'}/>
                        </div>
                        <Footer/>
                    </div>
                </CSSTransition>
                <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                    <DiscussScreen setNowPage={setNowPage}/>
                </CSSTransition>
            </div>
        }
    </div>
}
export default WorkingPage
