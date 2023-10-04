import {FunctionComponent, useEffect, useState} from "react";
import {nowPageType} from "../../../../public/staticInfo";
import BrandingPageMobile from "./branding-page-mobile/BrandingPageMobile";
import BrandingPageDesktop from "./branding-page-desktop/BrandingPageDesktop";



const BrandingPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect( () => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        { isMobile
            ?
                <BrandingPageMobile isMobile={isMobile} setNowPage={setNowPage} nowPage={nowPage} setPosition={setPosition}/>
            :
                <BrandingPageDesktop isMobile={isMobile} setNowPage={setNowPage} nowPage={nowPage} setPosition={setPosition}/>
        }
    </div>
}
export default BrandingPage;