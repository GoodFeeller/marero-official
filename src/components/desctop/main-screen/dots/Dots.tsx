import {FunctionComponent} from "react";
import styles from '../MainScreen.module.sass'
import PopUpText from "../../../special/pop-up-text/PopUpText";

const Dots:FunctionComponent = () => {
    return <ul className={styles.dotsList}>
        <PopUpText str={'Веб-дизайн'} startDelay={0.5} addDelay={0} threshold={1}/>
        <PopUpText str={'Разработка ПО'} startDelay={0.6} addDelay={0} threshold={1}/>
        <PopUpText str={'Визуальные решения'} startDelay={0.7} addDelay={0} threshold={1}/>
        <PopUpText str={'Разработка игр'} startDelay={0.8} addDelay={0} threshold={1}/>
        </ul>
}

export default Dots;