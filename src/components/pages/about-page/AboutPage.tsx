import {FunctionComponent, useEffect, useState} from "react";
import AboutScreen from "../../about-screen/AboutScreen";
import Mission from "../../mission/Mission";
import Photo from "../../photo/Photo";
import Ending from "../../ending/Ending";
import Footer from "../../footer/Footer";
import Value from "../../value/Value";
import DiscussScreen from "../../discuss-screen/DiscussScreen";

const AboutPage: FunctionComponent = () => {

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
        <AboutScreen setDiscuss={setDiscuss}/>
        <Mission/>
        <Photo src={'/assets/Group.png'}/>
        <Value/>
        <Ending setDiscuss={setDiscuss} page={'about'}/>
        <Footer/>
    </div>
    }
    </div>
}
export default AboutPage;