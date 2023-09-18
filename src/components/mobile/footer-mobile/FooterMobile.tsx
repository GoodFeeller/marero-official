import {FunctionComponent} from "react";
import { phoneNumber, marseroMail } from '../../../../public/staticInfo'

const FooterMobile: FunctionComponent = () => {
    return <div>
        <div/>
        <div>
            <span>{phoneNumber}</span>
            <span>{marseroMail}</span>
            <div></div>
        </div>
    </div>
}
export default FooterMobile