import { NavLink } from "react-router-dom";
// styles
import "./Header.css";
// images
import siteLogo from "../../assets/svg/site-logo.svg";
import shoppingIcon from "../../assets/svg/shopping-cart-icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <a href="/" className="site-logo">
          <img src={siteLogo} alt="site logo" />
        </a>
        <nav className="sitenav">
          <ul className="sitenav__list">
            <li className="sitenav__item">
              <NavLink to="/" className="sitenav__link">
                Home
              </NavLink>
            </li>
            <li className="sitenav__item">
              <NavLink to="/headphones" className="sitenav__link">
                HEADPHONES
              </NavLink>
            </li>
            <li className="sitenav__item">
              <NavLink to="/speakers" className="sitenav__link">
                SPEAKERS
              </NavLink>
            </li>
            <li className="sitenav__item">
              <NavLink to="/earphones" className="sitenav__link">
                EARPHONES
              </NavLink>
            </li>
          </ul>
        </nav>
        <a href="" className="header__icon">
          <img src={shoppingIcon} alt="shopping cart icon" />
        </a>
      </div>
      <hr className="header__line" />
      <div className="menu-bar">
        <ul className="menu-bar__list">
          <li className="menu-bar__item">
            <h6>headphones</h6>
            <a href="" className="menu-bar__link">
              <span>shop</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1.32227 1L6.32227 6L1.32227 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </li>
          <li className="menu-bar__item">
            {/* <img src={speakerImg} alt="" /> */}
            <h6>speakers</h6>
            <a href="" className="menu-bar__link">
              <span>shop</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1.32227 1L6.32227 6L1.32227 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </li>
          <li className="menu-bar__item">
            {/* <img src={earphoneImg} alt="" /> */}
            <h6>earphones</h6>
            <a href="" className="menu-bar__link">
              <span>shop</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1.32227 1L6.32227 6L1.32227 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
