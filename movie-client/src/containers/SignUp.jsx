import React, { useEffect } from "react";
import logo from "../assets/img/logo.svg";
import bgImg from "../assets/img/section/section.jpg";

function SignUp() {
  useEffect(() => {
    /*==============================
              Section bg
    ==============================*/

    document
      .querySelectorAll(".section--bg, .details__bg")
      .forEach(function (item) {
        if (item.hasAttribute("data-bg")) {
          console.log(item.attributes);
          item.style.background = "url(" + item.getAttribute("data-bg") + ")";
          item.style.backgroundPosition = "center center";
          item.style.backgroundRepeat = "no-repeat";
          item.style.backgroundSize = "cover";
        }
      });
  }, []);

  return (
    <React.Fragment>
      <div className="sign section--bg" data-bg={bgImg}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* <!-- registration form --> */}
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src={logo} alt="" />
                  </a>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Tên"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Tài khoản"
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
                      className="sign__input"
                      placeholder="Mật khẩu"
                    />
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked="checked"
                    />
                    <label htmlFor="remember">
                      Tôi đồng ý với <a href="#">Chính sách Bảo mật</a>
                    </label>
                  </div>

                  <button className="sign__btn" type="button">
                      Đăng ký
                  </button>

                  <span className="sign__text">
                    Đã có tài khoản? <a href="/sign-in">Đăng nhập</a>
                  </span>
                </form>
                {/* <!-- registration form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
