import {FunctionComponent, useEffect, useState} from "react";
import {nowPageType} from "../../../../public/staticInfo";
import AboutPageMobile from "./about-page-mobile/AboutPageMobile";
import AboutPageDesktop from "./about-page-desktop/AboutPageDesktop";

const AboutPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect( () => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        {
            isMobile ?
                    <AboutPageMobile isMobile={isMobile} setNowPage={setNowPage} nowPage={nowPage} setPosition={setPosition}/>
                :
                    <AboutPageDesktop isMobile={isMobile} setNowPage={setNowPage} nowPage={nowPage} setPosition={setPosition}/>
        }   
    </div>
}

export default AboutPage;