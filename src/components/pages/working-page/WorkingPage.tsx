import {FunctionComponent, useEffect, useState} from "react";
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

const WorkingPage: FunctionComponent = () => {
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
        <WorkingPageScreen setDiscuss={setDiscuss}/>
        <Categories page={'working'}/>
        <Circles page={'working'}/>
        <MarseroAdvantages page={'working'}/>
        <Photo src={'/assets/workingPhoto.svg'}/>
        <Steps page={'working'}/>
        <Technologies/>
        <Ending setDiscuss={setDiscuss} page={'working'}/>
        <Footer/>
        </div>
    }
    </div>
}
export default WorkingPage
