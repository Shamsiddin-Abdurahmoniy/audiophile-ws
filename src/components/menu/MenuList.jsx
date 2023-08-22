// styles
import "./MenuList.css";
// react
import { Link } from "react-router-dom";
// images
import headphoneImg from "../../assets/svg/headphone-img.svg";
import speakerImg from "../../assets/svg/speaker-img.svg";
import earphoneImg from "../../assets/svg/earphone-img.svg";
function MenuList() {
  return (
    <section className="menu">
      <div className="container menu__container">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/headphones">
              <img
                className="menu__img"
                src={headphoneImg}
                alt="headphone img"
                width="123"
                height="160"
              />

              <h3>headphones</h3>
              <p>
                <span>shop</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path
                    d="M1.3219 1L6.3219 6L1.3219 11"
                    stroke="#D87D4A"
                    stroke-width="2"
                  />
                </svg>
              </p>
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/speakers">
              <img
                className="menu__img"
                src={speakerImg}
                alt="headphone img"
                width="123"
                height="146"
              />
              <h3>speakers</h3>
              <p>
                <span>shop</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path
                    d="M1.3219 1L6.3219 6L1.3219 11"
                    stroke="#D87D4A"
                    stroke-width="2"
                  />
                </svg>
              </p>
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/earphones">
              <img
                className="menu__img"
                src={earphoneImg}
                alt="headphone img"
                width="125"
                height="126"
              />
              <h3>earphones</h3>
              <p>
                <span>shop</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path
                    d="M1.3219 1L6.3219 6L1.3219 11"
                    stroke="#D87D4A"
                    stroke-width="2"
                  />
                </svg>
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MenuList;
