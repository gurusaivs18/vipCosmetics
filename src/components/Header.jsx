 
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Call: +971 50 454 5061</span>
          <span>Email: info@vipcosmetics.net</span>
        </div>
      </div>

      <div className="hero-wash">
        <div className="logo-box">
          <img src={logo} alt="VIP Cosmetics" className="site-logo" />
        </div>
      </div>

      <nav className="main-nav">
        <div className="container nav-inner">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
 
