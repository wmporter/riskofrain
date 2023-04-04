import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className='navBar'>
        <Link to='/' className='navLink'>Item List</Link>
        <Link to='/tips' className='navLink'>Tips & Tricks</Link>
        <Link to='/about' className='navLink'>About</Link>
        <Link to='/contact' className='navLink'>Contact Us</Link>
        </div>
    )
}

export default NavBar;