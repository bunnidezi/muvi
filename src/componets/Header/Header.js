import SimpleBottomNavigation from '../MainNav';
import './Header.css';
import logo from './logo.png';

const Header=()=>{
    return(
        <>
        <span onClick={() =>window.scroll(0, 0)}
        className="header">
            <img src={logo} className="logo" />
             <span className="titleee">Movie App</span>
             <SimpleBottomNavigation/>
        </span></>
    )
} 

export default Header;