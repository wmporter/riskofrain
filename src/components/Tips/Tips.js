import NavBar from '../NavBar.js';
import logo from '../logo.png';

function Tips() {
    return (
        <div className="tips tc">
            <img className='logo' src={logo} alt='Risk of Rain 2' /><br />
            <NavBar />
            <h1>...Tips & Tricks will be added shortly!</h1><br/>
        </div>
    )
}

export default Tips;