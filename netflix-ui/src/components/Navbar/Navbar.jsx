import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png" alt="Netflix Logo" />
                <span>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
                <span>Browse by Languages</span>
            </div>
            <div className="right">
                <SearchIcon className="icon" />
                <span>Children</span>
                <NotificationsIcon className="icon" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile 1" />
                <div className="profile">
                    <ArrowDropDownIcon className="icon" />
                    <div className="options">
                        <span>Account</span>
                        <span>Help Center</span>
                        <span>Sign Out of Netflix</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar