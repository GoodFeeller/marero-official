import {FunctionComponent, useEffect, useState} from "react"
import './../../../index.scss'
import {nowPageType} from './../../../../public/staticInfo'
import MobileMainPage from "./mobile-main-page/MobileMainPage";
import DesktopMainPage from "./desctop-main-page/DesktopMainPage";

const MainPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect( () => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        {
            isMobile ?
                <MobileMainPage isMobile={isMobile} setNowPage={setNowPage} nowPage={nowPage} setPosition={setPosition}/>
                :
                <DesktopMainPage isMobile={isMobile} setNowPage={setNowPage} nowPage={nowPage} setPosition={setPosition}/>
        }

    </div>
}
export default MainPage;