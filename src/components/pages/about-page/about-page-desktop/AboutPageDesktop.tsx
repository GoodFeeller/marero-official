import {FunctionComponent} from "react";
import {CSSTransition} from "react-transition-group";
import Mission from "../../../share/mission/Mission";
import Ending from "../../../share/ending/Ending";
import {nowPageType, setNowPageType} from "../../../../../public/staticInfo";
import AboutScreen from "../../../desctop/about-screen/AboutScreen";
import Value from "../../../desctop/value/Value";
import Footer from "../../../desctop/footer/Footer";
import DiscussScreen from "../../../desctop/discuss-screen/DiscussScreen";
import BigPhoto from "../../../special/big-photo/BigPhoto";

interface IProps {
    nowPage: nowPageType,
    setPosition: (value: (((prevState: number) => number) | number)) => void,
    setNowPage: setNowPageType,
    isMobile: boolean
}
const AboutPageDesktop: FunctionComponent<IProps> = ({nowPage, setNowPage, setPosition, isMobile}) => {
    return <div>
        <div>
            <CSSTransition in={nowPage == 'common' || nowPage == 'pageChanger'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                <div>
                    <AboutScreen setPosition={setPosition} setNowPage={setNowPage}/>
                    <Mission isMobile={isMobile}/>
                    <BigPhoto elemPos={0.721} smallSrc={'/assets/big-photos/Group.png'} src= {'/assets/big-photos/Group.png'}/>
                    <div style={{marginTop: '7.96vw'}}>
                        <Value/>
                    </div>
                    <div style={{margin: '7.5vw 0 5.2vw 0'}}>
                        <Ending setPosition={setPosition} isMobile={isMobile} setNowPage={setNowPage} page={'about'}/>
                    </div>
                    <Footer/>
                </div>
            </CSSTransition>
            <CSSTransition in={nowPage == 'callPage'} timeout={250} classNames='mobilePageChanger' unmountOnExit>
                <DiscussScreen setNowPage={setNowPage}/>
            </CSSTransition>
        </div>
    </div>
}
export default AboutPageDesktop