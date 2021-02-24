import bgDesktop from '../images/bg-header-desktop.svg';
import bgMobile from '../images/bg-header-mobile.svg';

const Header = () => {
    return(
        <div className='header'>
            <img src={bgDesktop} className="desktop" alt="desktop-header"/>
            <img src={bgMobile} className="mobile" alt="mobile-header"/>
        </div>
    )
}
export default Header