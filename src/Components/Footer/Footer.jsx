import {ReactComponent as FbIcon} from './icon-facebook.svg'
import {ReactComponent as InstIcon} from './icon-instagram.svg'
import {ReactComponent as PintIcon} from './icon-pinterest.svg'
import "./footer.css";

function Footer () {
    return(
        <div className="footer-section">
            <div className="footer-icons">
                <FbIcon className='icon' />
                <InstIcon className='icon' />
                <PintIcon className='icon' />
            </div>
        </div>
    );
}

export default Footer;