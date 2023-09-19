import {FunctionComponent, useState} from "react";
import AboutScreen from "../../about-screen/AboutScreen";
import Mission from "../../mission/Mission";
import Photo from "../../photo/Photo";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import Value from "../../value/Value";
import DiscussScreen from "../../discuss-screen/DiscussScreen";
import {CSSTransition} from "react-transition-group";
import {nowPageType} from "../../../../public/staticInfo";

const AboutPage: FunctionComponent = () => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    return <div>
        <CSSTransition in={nowPage == 'common'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
            <div>
                <AboutScreen setNowPage={setNowPage}/>
                <Mission/>
                <Photo src={'/assets/Group.png'}/>
                <Value/>
                <Ending setNowPage={setNowPage} page={'about'}/>
                <Footer/>
            </div>
        </CSSTransition>
        <CSSTransition in={nowPage == 'callPage'} timeout={500} classNames='mobilePageChanger' unmountOnExit>
            <DiscussScreen setNowPage={setNowPage}/>
        </CSSTransition>
    </div>
}
export default AboutPage;