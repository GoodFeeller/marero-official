import {FunctionComponent, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import styles from './PopUpPhoto.module.sass'

interface IProps {
    className?: string,
    src: string
    threshold: number,
    startDelay?: number
    addDelay?: number
    boxClassName?: string

}

const PopUpPhoto: FunctionComponent<IProps> = ({
                                                   src,
                                                   className = '',
                                                   threshold,
                                                   startDelay = 0,
                                                   addDelay = 0.04,
                                                   boxClassName

                                               }) => {
    const [show, setShow] = useState(false)
    const {ref, inView} = useInView({
        threshold: threshold
    })
    useEffect(() => {
        if (inView) setShow(true)
    }, [inView])
    return <div ref={ref} className={styles.photoBox + ' ' + boxClassName}>
        <img
            className={show ? styles.open + ' ' + className
                : styles.close + ' ' + className} style={{animationDelay: `${startDelay + addDelay}s`}}
            src={src}
        />
    </div>
}
export default PopUpPhoto