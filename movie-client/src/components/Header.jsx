import React, { useEffect } from "react";
import logo from "../assets/img/logo.svg";
import SearchBox from "./SearchBox";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = ({user}) => {
  useEffect(() => {
    let searchBtn = document.querySelector(".header__search-btn");
    let headerBtn = document.querySelector(".header__btn");
    let headerNav = document.querySelector(".header__nav");
    /*==============================
	                Menu
	  ==============================*/
    // Event NavBar Button
    headerBtn.addEventListener("click", function () {
      headerBtn.classList.toggle("header__btn--active");

      headerNav.classList.toggle("header__nav--active");
      document.querySelector(".body").classList.toggle("body--active");

      if (searchBtn.classList.contains("active")) {
        searchBtn.classList.toggle("active");
        document
          .querySelector(".header__search")
          .classList.toggle("header__search--active");
      }
    });

    /*==============================
	                Search
	  ==============================*/

    // Event Search Button
    searchBtn.addEventListener("click", () => {
      searchBtn.classList.toggle("active");

      // Event show search bar
      let headerSearch = document.querySelector(".header__search");
      headerSearch.classList.toggle("header__search--active");

      if (headerBtn.classList.contains("header__btn--active")) {
        headerBtn.classList.toggle("header__btn--active");
        headerNav.classList.toggle("header__nav--active");
        document.querySelector(".body").classList.toggle("body--active");
      }
    });

    return () => {
      headerBtn.removeEventListener("click");
      searchBtn.removeEventListener("click");
    };
  }, []);

  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <a href="/" className="header__logo">
                  <img src={logo} alt="" />
                </a>

                <ul className="header__nav">
                  <li className="header__nav-item">
                    <a
                      className="dropdown-toggle header__nav-link"
                      href="/"
                      role="button"
                      id="dropdownMenuHome"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Trang chủ
                    </a>

                    <ul
                      className="dropdown-menu header__dropdown-menu"
                      aria-labelledby="dropdownMenuHome"
                    >
                      <li>
                        <a href="index.html">Home slideshow bg</a>
                      </li>
                      <li>
                        <a href="index2.html">Home static bg</a>
                      </li>
                    </ul>
                  </li>

                  <li className="header__nav-item">
                    <a
                      className="dropdown-toggle header__nav-link"
                      href="/genre/action/1"
                      role="button"
                      id="dropdownMenuCatalog"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Thể loại
                    </a>

                    <ul
                      className="dropdown-menu header__dropdown-menu"
                      aria-labelledby="dropdownMenuCatalog"
                    >
                      <li>
                        <a href="catalog1.html">Catalog Grid</a>
                      </li>
                      <li>
                        <a href="catalog2.html">Catalog List</a>
                      </li>
                      <li>
                        <a href="details1.html">Details Movie</a>
                      </li>
                      <li>
                        <a href="details2.html">Details TV Series</a>
                      </li>
                    </ul>
                  </li>

                  <li className="header__nav-item">
                    <a href="/update-account" className="header__nav-link">
                      Nâng cấp tài khoản
                    </a>
                  </li>
                </ul>

                <div className="header__auth">
                  <button className="header__search-btn" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>

                  {user === null ? (
                    <Link to="/login" className="header__sign-in">
                      <i className="icon ion-ios-log-in"></i>
                      <span>Đăng Nhập</span>
                    </Link>
                  ) : (
                    <Link to="/user" className="header__sign-in">
                      <i className="icon ion-ios-log-in"></i>
                      <span>{user.name}</span>
                    </Link>
                  )}
                </div>

                <button className="header__btn" type="button">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- header search --> */}
      <SearchBox />
      {/* <!-- end header search --> */}
    </header>
  );
};

Header.prototype = {
  user: PropTypes.object,
};
Header.defaultProps = {
  user: null,
};
export default Header;
