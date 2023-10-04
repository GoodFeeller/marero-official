import styles from './KeyDesign.module.sass'
import {FunctionComponent} from "react";
import KeyDesignTitle from "./keyDesignTitle/KeyDesignTitle";
import TopImagesBlock from "./topImagesBlock/TopImagesBlock";
import KeyDesignBottomText from "./keyDesignBottomText/KeyDesignBottomText";
import BottomImagesBlock from "./bottomImagesBlock/BottomImagesBlock";

const KeyDesign: FunctionComponent<{ page: string }> = ({page}) => {
    return <div className={styles.keyDesignBody}>
        <KeyDesignTitle page={page}/>
        <TopImagesBlock page={page}/>
        <KeyDesignBottomText page={page}/>
        <BottomImagesBlock page={page}/>
    </div>
}
export default KeyDesign;