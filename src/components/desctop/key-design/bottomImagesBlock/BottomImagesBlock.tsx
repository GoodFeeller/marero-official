import {FunctionComponent, memo} from "react";
import styles from "../KeyDesign.module.sass";
import Photo from "../../../share/photo/Photo";

const BottomImagesBlock: FunctionComponent<{page: string}> = ({page}) => {
    return <div style={{position: 'relative'}}>
        <div className={styles.keyDesignBottomPhotos}>
            <div>
                {page === 'main-page' || page === 'branding'
                    ? <Photo src={'/assets/keyDesign/keyDesign4.png'} smallSrc={'/assets/keyDesign/keyDesign4-small.png'}/> :
                    <Photo src={'/assets/keyDesign/keyDesign6.png'} smallSrc={'/assets/keyDesign/keyDesign6-small.png'}/>
                }
            </div>
            <div>
                {page === 'main-page' || page == 'branding'
                    ?
                    <Photo src={'/assets/keyDesign/keyDesign5.png'} smallSrc={'/assets/keyDesign/keyDesign5-small.png'}/> :
                    <Photo src={'/assets/keyDesign/keyDesign7.png'} smallSrc={'/assets/keyDesign/keyDesign7-small.png'}/>
                }
            </div>
        </div>
    </div>
}
export default memo(BottomImagesBlock)