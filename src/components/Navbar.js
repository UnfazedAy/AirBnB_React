import './Navbar.css'
import airbnbLogo from '../assets/airbnb.png';

export default function Navbar () {
    return (
        <nav>
            <img src={airbnbLogo} alt='Navbar logo' className='nav--logo' />
        </nav>
    );
}