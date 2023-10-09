import {FunctionComponent, memo, useEffect, useState} from "react";
import styles from './Services.module.sass'
import PopUpText from "../../special/pop-up-text/PopUpText";
import {useNavigate} from "react-router-dom";
const Services: FunctionComponent = () => {
    const [src, setSrc] = useState('')
    const [matrix, setMatrix] = useState<string>('/assets/service/backMatrix-small.png')
    const [design, setDesign] = useState<string>('/assets/service/designBack-small.png')
    const [branding, setBranding] = useState<string>('/assets/service/backBranding-small.png')
    const navigate = useNavigate()
    useEffect(() => {
        const imgMatrix = new Image()
        const imgDesign = new Image()
        const imgBranding = new Image()
        imgMatrix.src = matrix
        imgDesign.src = design
        imgBranding.src = branding
        imgMatrix.onload = () => {
            imgMatrix.src = '/assets/service/backMatrix.png'
            imgMatrix.onload = () => {
                setMatrix('/assets/service/backMatrix.png')
            }
        }
        imgDesign.onload = () => {
            imgDesign.src = '/assets/service/designBack.png'
            imgDesign.onload = () => {
                setDesign('/assets/service/designBack.png')
            }
        }
        imgBranding.onload = () => {
            imgBranding.src = '/assets/service/backBranding.png'
            imgBranding.onload = () => {
                setBranding('/assets/service/backBranding.png')
            }
        }

    }, [matrix, branding, design])
    return <div className={styles.servicesBody} style={src === '' ? {background: 'black'} : {backgroundImage: 'url("' + src + '")'}}>
        <PopUpText str={'/Услуги'} threshold={1} boxClassName={styles.service}/>
        <div className={styles.servicesContent}>
            <PopUpText onClick={() => navigate('/working')} str={'РАЗРАБОТКА'} threshold={1} onMouseLeave={() => setSrc('')}
                       onMouseEnter={() => setSrc(matrix)}/>
            <PopUpText onClick={() => navigate('/design')} str={'WEB-DESIGN'} threshold={1} onMouseLeave={() => setSrc('')}
                       onMouseEnter={() => setSrc(design)}/>
            <PopUpText onClick={() => navigate('/branding')} str={'БРЕНДИНГ'} threshold={1} onMouseLeave={() => setSrc('')}
                       onMouseEnter={() => setSrc(branding)}/>
        </div>
    </div>
}

export default memo(Services)