import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
function Header() {
    return (
        <nav className='header'>
        
         <Link to='/'>
            {/* logo on left with amazon img  */}
            <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo"/>
         </Link>
            {/* search box  */}
            <div className="header__search">
            <input className='header__searchInput' type="text" name="" />
            <SearchIcon className="header__searchIcon" />
            </div>
           {/* 3 links  */}
           {/* basket icon with number  */}
        </nav>
    )
}

export default Header
