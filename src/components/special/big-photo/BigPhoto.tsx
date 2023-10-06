import {FunctionComponent, memo, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import styles from './bigPhoto.module.sass'
import Photo from "../../share/photo/Photo";

interface IProps {
    src: string,
    smallSrc: string,
    position: number
}
const BigPhoto: FunctionComponent<IProps> = ({src, smallSrc, position}) => {
    const {ref, inView, entry} = useInView({
        threshold: 0.001
    })
    const [style, setStyle] = useState<object>({borderWidth: '20vw'})

    useEffect(() => {
        const resize: () => void = () => {
            if (entry) {
                const size = 20 - (window.scrollY / window.innerWidth - position) / (entry.target.clientWidth / window.innerWidth) * 35
                size < 0 ? setStyle({backgroundWidth: '0'}) :
                    setStyle({borderWidth: `${size}vw`})
            }
        }
        inView ? window.addEventListener('scroll', resize) :
            window.removeEventListener('scroll', resize)
        return () => window.removeEventListener('scroll', resize)
    }, [inView])


    return <div className={styles.photoBody}>
        <div ref={ref} className={styles.borders} style={style}/>
        <Photo src={src} smallSrc={smallSrc}/>
    </div>

    }
export default memo(BigPhoto)