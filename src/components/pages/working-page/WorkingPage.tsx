import {FunctionComponent, useEffect, useState} from "react";
import {
    nowPageType
} from "../../../../public/staticInfo";
import WorkingPageMobile from "./working-page-mobile/WorkingPageMobile";
import WorkingPageDesktop from "./working-page-desktop/WorkingPageDesktop";

const WorkingPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect( () => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        { isMobile
            ?
                <WorkingPageMobile isMobile={isMobile} setNowPage={setNowPage} setPosition={setPosition} nowPage={nowPage}/>
            :
                <WorkingPageDesktop isMobile={isMobile} setNowPage={setNowPage} setPosition={setPosition} nowPage={nowPage}/>
        }
    </div>
}
export default WorkingPage
