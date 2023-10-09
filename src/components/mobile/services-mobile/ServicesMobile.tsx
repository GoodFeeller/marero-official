import {FunctionComponent} from "react";
import styles from './ServiceMobile.module.sass'
import PopUpText from "../../special/pop-up-text/PopUpText";
const ServicesMobile: FunctionComponent = () => {
    return <div className={styles.serviceBody}>
        <PopUpText str={'/Услуги'} threshold={1}  boxClassName={styles.littleTitle}/>
        <PopUpText str={'РАЗРАБОТКА'} threshold={1}  boxClassName={styles.bigTitle}/>
        <PopUpText str={'WEB-DESIGN'} threshold={1}  boxClassName={styles.bigTitle}/>
        <PopUpText str={'БРЕНДИНГ'} threshold={1}  boxClassName={styles.bigTitle}/>
    </div>
}
export default ServicesMobile