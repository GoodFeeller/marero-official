import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";
import GrowingPhoto from "../../../special/growingPhoto/GrowingPhoto";

const TopImagesBlock: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={page == 'branding' ? styles.topImagesBoxBranding : styles.topImagesBox}>
        <div>
            { page == 'branding' ?
                <GrowingPhoto height={20.2} src={'/assets/keyDesign/keyDesign8.png'} smallSrc={'/assets/keyDesign/keyDesign8-small.png'}/>
                : <GrowingPhoto height={20.2} src={'/assets/keyDesign/keyDesign.png'} smallSrc={'/assets/keyDesign/keyDesign-small.png'}/>
            }
        </div>
        <div>
            { page == 'branding' ?
                <GrowingPhoto height={20.2} addDelay={0.2} src={'/assets/keyDesign/keyDesign9.png'} smallSrc={'/assets/keyDesign/keyDesign9-small.png'}/> :
                <GrowingPhoto height={20.2} addDelay={0.2} src={'/assets/keyDesign/keyDesign2.png'} smallSrc={'/assets/keyDesign/keyDesign2-small.png'}/>
            }
        </div>
        <div>
            { page == 'branding' ?
                <GrowingPhoto height={20.2} addDelay={0.4} src={'/assets/keyDesign/keyDesign10.png'} smallSrc={'/assets/keyDesign/keyDesign10-small.png'}/>
                :
                <GrowingPhoto height={20.2} addDelay={0.4} src={'/assets/keyDesign/keyDesign3.png'} smallSrc={'/assets/keyDesign/keyDesign3-small.png'}/>}
        </div>
    </div>
}

export default memo(TopImagesBlock)