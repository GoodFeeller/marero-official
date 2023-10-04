import {FunctionComponent} from "react";
import styles from './Ending.module.sass'
import {setNowPageType} from "../../../../public/staticInfo";
import DiscussButton from "../../desctop/header/discussButton/DiscussButton";
import DiscussMobileButton from "../../mobile/discussButtonMobile/DiscussMobileButton";
import EndingLines from "./ending-lines/EndingLines";
import EndingText from "./ending-text/EndingText";

interface IProps {
    isMobile: boolean,
    page: string,
    setNowPage: setNowPageType,
    setPosition:  (value: (((prevState: number) => number) | number)) => void

}

const Ending: FunctionComponent<IProps> = ({ page , setNowPage, isMobile, setPosition}) => {
    return <div className={styles.endingBody}>
        <div className={styles.endingContent}>
            <EndingLines isMobile={isMobile}/>
            <EndingText page={page} isMobile={isMobile}/>
        </div>
        { isMobile
            ?
            <DiscussMobileButton setPosition={setPosition} setNowPage={setNowPage}/>
            :
            <DiscussButton setPosition={setPosition} setNowPage={setNowPage}/>
        }

    </div>
}
export default Ending