import {FunctionComponent, useState} from "react";
import styles from './Services.module.sass'
const Services: FunctionComponent = () => {
    const [src, setSrc] = useState('')
    return <div className={styles.servicesBody} style={src === '' ? {background: 'black'} : {backgroundImage: 'url("' + src + '")'}}>
        <span className={styles.service}>/Услуги</span>
        <div className={styles.servicesContent}>
            <span onMouseEnter={() => setSrc('/assets/backMatrix.png')} onMouseLeave={() => setSrc('')}>РАЗРАБОТКА</span>
            <span onMouseEnter={() => setSrc('/assets/designBack.png')} onMouseLeave={() => setSrc('')}>WEB-DESIGN</span>
            <span onMouseEnter={() => setSrc('/assets/backBranding.png')} onMouseLeave={() => setSrc('')}>БРЕНДИНГ</span>
        </div>
    </div>
}

export default Services;