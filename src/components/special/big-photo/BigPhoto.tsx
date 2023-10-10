import {FunctionComponent, memo, useEffect, useRef, useState} from "react";
import styles from './bigPhoto.module.sass'
import Photo from "../../share/photo/Photo";

interface IProps {
    src: string,
    smallSrc: string,
    elemPos: number
}
const BigPhoto: FunctionComponent<IProps> = ({src, smallSrc, elemPos}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [position, setPosition] = useState(elemPos * window.innerWidth - window.innerHeight)
    const [style, setStyle] = useState<object>({borderWidth: '35vw'})

    useEffect(() => {
        const resize: () => void = () => {
            if (ref.current) {
                const size = 35 - (window.scrollY - position) / (ref.current.clientWidth) * 80
                size < 0 ?  setStyle({backgroundWidth: '0'}) :
                    size > 35 ? setStyle({borderWidth: '35vw'}) :setStyle({borderWidth: `${size}vw`})
            }
        }
        window.addEventListener('scroll', resize)
        return () => window.removeEventListener('scroll', resize)
    }, [position])
    useEffect( () => {
        const checkPosition = () => {
            setPosition(elemPos * window.innerWidth - window.innerHeight)
        }
        window.addEventListener('resize', checkPosition)
        return () => window.removeEventListener('resize', checkPosition)
    }, [])


    return <div ref={ref} className={styles.photoBody}>
        <div className={styles.borders} style={style}/>
        <Photo src={src} smallSrc={smallSrc}/>
    </div>

    }
export default memo(BigPhoto)