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
    return <div> {
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
export default MainPage;