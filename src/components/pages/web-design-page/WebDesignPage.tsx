import {FunctionComponent, useEffect, useState} from "react";
import {nowPageType} from "../../../../public/staticInfo";
import WebDesignPageMobile from "./web-design-page-mobile/WebDesignPageMobile";
import WebDesignPageDesktop from "./web-design-page-desktop/WebDesignPageDesktop";

const WebDesignPage: FunctionComponent<{isMobile: boolean}> = ({isMobile}) => {
    const [nowPage, setNowPage] = useState<nowPageType>('common')
    const [position, setPosition] = useState<number>(0)
    useEffect( () => {
        if (nowPage == 'common')
            window.scrollTo(0, position)
    }, [nowPage])
    return <div>
        { isMobile
            ?
                <WebDesignPageMobile nowPage={nowPage} isMobile={isMobile} setNowPage={setNowPage} setPosition={setPosition}/>
            :
                <WebDesignPageDesktop nowPage={nowPage} setPosition={setPosition} setNowPage={setNowPage} isMobile={isMobile}/>
        }
    </div>
}
export default WebDesignPage