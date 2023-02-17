import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /* ===========Chance Background Header ============ */

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //when the scroll is height then 200 viewport height, add the scroll-header class to tag with the header class

    if (this.scrollY >= 560) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* =========== TOGGLE MENU ============ */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Sultan
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#projects" onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }>
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }>
                <i className="uli uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle">
          {Toggle === true ? (
            <i
              className=" uil uil-times nav__close "
              onClick={() => showMenu(!Toggle)}
            ></i>
          ) : (
            <i className="uil uil-apps" onClick={() => showMenu(!Toggle)}></i>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
