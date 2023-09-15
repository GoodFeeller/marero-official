import {FunctionComponent, useEffect, useState} from "react";
import WebDesignScreen from "../../web-design-screen/WebDesignScreen";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import KeyDesign from "../../key-design/KeyDesign";
import Categories from "../../categories/Categories";
import Circles from "../../circles/Circles";
import Steps from "../../steps/Steps";
import DiscussScreen from "../../discuss-screen/DiscussScreen";

const WebDesignPage: FunctionComponent = () => {
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
        <WebDesignScreen setDiscuss={setDiscuss}/>
        <Categories page={'design'}/>
        <Circles page={'design'}/>
        <KeyDesign setDiscuss={setDiscuss} page={'design'}/>
        <Steps page={'design'}/>
        <Ending setDiscuss={setDiscuss} page={'design'}/>
        <Footer/>
        </div>
    }
    </div>
}
export default WebDesignPage