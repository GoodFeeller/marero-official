import {FunctionComponent, useEffect, useState} from "react";
import BrandingScreen from "../../branding-screen/BrandingScreen";
import BuisnessActivity from "../../buisness-activity/BuisnessActivity";
import MarseroAdvantages from "../../marsero-advantages/MarseroAdvantages";
import KeyDesign from "../../key-design/KeyDesign";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import DiscussScreen from "../../discuss-screen/DiscussScreen";

const BrandingPage: FunctionComponent = () => {
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
        <BrandingScreen setDiscuss={setDiscuss}/>
        <BuisnessActivity/>
        <MarseroAdvantages page={'branding'}/>
        <KeyDesign setDiscuss={setDiscuss} page={'branding'}/>
        <Ending setDiscuss={setDiscuss} page={'branding'}/>
        <Footer/>
    </div>
    }
    </div>
}
export default BrandingPage;