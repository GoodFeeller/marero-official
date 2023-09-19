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

const WorkingPage: FunctionComponent = () => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <WorkingPageScreen setNowPage={setNowPage}/>
                <Categories page={'working'}/>
                <Circles page={'working'}/>
                <MarseroAdvantages page={'working'}/>
                <Photo src={'/assets/workingPhoto.svg'}/>
                <Steps page={'working'}/>
                <Technologies/>
                <Ending setNowPage={setNowPage} page={'working'}/>
                <Footer/>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
            <DiscussScreen setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default WorkingPage
