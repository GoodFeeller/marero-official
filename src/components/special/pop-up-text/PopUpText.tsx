import {FunctionComponent, MouseEventHandler, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import styles from './PopUpText.module.sass'

interface IProps {
    className?: string,
    str: string
    threshold: number,
    startDelay?: number
    addDelay?: number
    boxClassName?: string
    onMouseEnter?: MouseEventHandler<HTMLSpanElement> | undefined
    onMouseLeave?: MouseEventHandler<HTMLSpanElement> | undefined
}

const PopUpText: FunctionComponent<IProps> = ({
                                                  str,
                                                  className = '',
                                                  threshold,
                                                  startDelay = 0,
                                                  addDelay = 0.04,
                                                  onMouseEnter,
                                                  onMouseLeave,
                                                  boxClassName
                                              }) => {
    const [show, setShow] = useState(false)
    const {ref, inView} = useInView({
        threshold: threshold
    })
    useEffect(() => {
        if (inView) setShow(true)
    }, [inView])
    return <div ref={ref} className={styles.textBox + ' ' + boxClassName}>
        <span
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {str.split('').map((e, index) => <span key={index} className={show ? styles.open
            : styles.close} style={{animationDelay: `${startDelay + index * addDelay}s`}}>{e}</span>)}</span>
    </div>
}
export default PopUpText