import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";
import GrowingPhoto from "../../../special/growingPhoto/GrowingPhoto";

const BottomImagesBlock: FunctionComponent<{page: string}> = ({page}) => {
    return <div style={{position: 'relative'}}>
        <div className={page == 'design' ? styles.keyDesignBottomPhotosDesign : styles.keyDesignBottomPhotos}>
            <div>
                {page === 'main-page' || page === 'branding'
                    ? <GrowingPhoto threshold={0.397} height={44.1} src={'/assets/keyDesign/keyDesign4.png'} smallSrc={'/assets/keyDesign/keyDesign4-small.png'}/> :
                    <GrowingPhoto height={30.6} src={'/assets/keyDesign/keyDesign6.png'} smallSrc={'/assets/keyDesign/keyDesign6-small.png'}/>
                }
            </div>
            <div>
                {page === 'main-page' || page == 'branding'
                    ?
                    <GrowingPhoto height={35.1} addDelay={1} src={'/assets/keyDesign/keyDesign5.png'} smallSrc={'/assets/keyDesign/keyDesign5-small.png'}/> :
                    <GrowingPhoto height={30.6} addDelay={0.2} src={'/assets/keyDesign/keyDesign7.png'} smallSrc={'/assets/keyDesign/keyDesign7-small.png'}/>
                }
            </div>
        </div>
    </div>
}
export default memo(BottomImagesBlock)