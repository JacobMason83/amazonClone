
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import { auth } from './firebase';
function Header() {
    const [{ basket, user }] = useStateValue()
    const login = () => {
        auth.signOut()
    }
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
           <div className="header__nav">
           {/* 3 links  Link is a spa single page application that doesnt cause refreshing */}
           {/* 1st link   */}
           <Link to={!user && '/login'} className='header__link'>
           <div onClick={login} className="header__option">
            <span className='header__optionLineOne'>Hello {user ? user.email : ""}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'} </span>
           </div>
           </Link>
           <Link to='/' className='header__link'>
           {/* 2nd link   */}
           <div className="header__option">
            <span className='header__optionLineOne' >Returns</span>
            <span className='header__optionLineTwo'>& Orders </span>
           </div>
           </Link>
           {/* 3rd link   */}
           <Link to='/' className='header__link'>
           <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime </span>
           </div>
           </Link>
           {/* 4th link   */}
           <Link to='/checkout' className='header__link'>
           <div className="header__optionBasket">
           {/* basket icon with number  */}
               {/* shopping basket icon` */}
                <ShoppingBasketIcon />
               {/* number of items in the basket   */}
               <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
           </div>

           </Link>
           </div>
        </nav>
    )
}

export default Header
