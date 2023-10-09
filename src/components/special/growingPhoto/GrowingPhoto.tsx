import {FunctionComponent, memo, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import styles from './GrowingPhoto.module.sass'
import Photo from "../../share/photo/Photo";

interface IProps {
    src: string,
    smallSrc: string,
    height: number,
    addDelay?: number
}
const GrowingPhoto: FunctionComponent<IProps> = ({src, smallSrc, height, addDelay= 0}) => {
    const {ref, inView} = useInView({
        threshold: 0.5
    })
    const [border, setBorder] = useState<number>(height + 1)

    useEffect(() => {
        if (inView) setBorder(0)
    }, [inView])


    return <div className={styles.photoBody}>
        <div ref={ref} className={styles.borders} style={{borderWidth: `${border}vw`, transitionDelay: `${addDelay}s`}}/>
        <Photo style={{height: `${height}vw`}} src={src} smallSrc={smallSrc}/>
    </div>

}
export default memo(GrowingPhoto)