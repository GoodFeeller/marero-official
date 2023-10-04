import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";
import Photo from "../../../share/photo/Photo";

const TopImagesBlock: FunctionComponent<{page: string}> = ({page}) => {
    return <div className={page == 'branding' ? styles.topImagesBoxBranding : styles.topImagesBox}>
        <div>
            { page == 'branding' ?
                <Photo src={'/assets/keyDesign/keyDesign8.png'} smallSrc={'/assets/keyDesign/keyDesign8-small.png'}/>
                : <Photo src={'/assets/keyDesign/keyDesign.png'} smallSrc={'/assets/keyDesign/keyDesign-small.png'}/>
            }
        </div>
        <div>
            { page == 'branding' ?
                <Photo src={'/assets/keyDesign/keyDesign9.png'} smallSrc={'/assets/keyDesign/keyDesign9-small.png'}/> :
                <Photo src={'/assets/keyDesign/keyDesign2.png'} smallSrc={'/assets/keyDesign/keyDesign2-small.png'}/>
            }
        </div>
        <div>
            { page == 'branding' ?
                <Photo src={'/assets/keyDesign/keyDesign10.png'} smallSrc={'/assets/keyDesign/keyDesign10-small.png'}/>
                :
                <Photo src={'/assets/keyDesign/keyDesign3.png'} smallSrc={'/assets/keyDesign/keyDesign3-small.png'}/>}
        </div>
    </div>
}

export default memo(TopImagesBlock)