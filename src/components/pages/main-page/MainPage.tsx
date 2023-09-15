import {FunctionComponent, useEffect, useState} from "react";
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

const MainPage: FunctionComponent = () => {
    const [firstStart, setFirstStart] = useState<boolean>(true)
    const [discuss, setDiscuss] = useState<boolean>(false)
    const [change, setChange] = useState<boolean>(false)
    useEffect(() => {
        if (firstStart) setFirstStart(false)
        else {
            if (discuss) {
                document.getElementById('root')?.classList.add('changed')
                setTimeout(() => {
                    setChange(true)
                }, 1500)
                setTimeout( () => {
                    document.getElementById('root')?.classList.remove('changed')
                }, 3000)
            }
            else {
                document.getElementById('root')?.classList.add('changed')
                setTimeout(() => {
                    setChange(false)
                }, 1500)
                setTimeout( () => {
                    document.getElementById('root')?.classList.remove('changed')
                }, 3000)
            }
        }

    }, [discuss])
    const isMobile = window.screen.availWidth <= 560
    return <div>
        {
            isMobile ?
                <div>
                    <MainScreenMobile setDiscuss={setDiscuss}/>
                    <ServicesMobile/>
                    <Photo src={'/assets/main-page-photo.png'}/>
                    <Steps page={'main-page'}/>
                    <AdvantagesMobile page={'main-page'}/>
                </div>
                :
                <div>
                {
                    change ? <DiscussScreen setDiscuss={setDiscuss}/> :
                        <div>
                            <MainScreen setDiscuss={setDiscuss}/>
                            <Services/>
                            <Photo src={'/assets/Group.png'}/>
                            <Steps page={'main-page'}/>
                            <KeyDesign setDiscuss={setDiscuss} page={'main-page'}/>
                            <MarseroAdvantages page={'main-page'}/>
                            <Technologies/>
                            <Ending setDiscuss={setDiscuss} page={'main-page'}/>
                            <Footer/>
                        </div>
                }
                </div>
        }

    </div>
}
export default MainPage;