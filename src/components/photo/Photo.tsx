import {FunctionComponent} from "react";
import styles from './Photo.module.sass'

const Photo: FunctionComponent<{src: string}> = ({ src }) => {
    return <img src={src} className={styles.photo}/>
}
export default Photo;