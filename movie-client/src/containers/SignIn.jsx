/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import bgImg from "../assets/img/section/section.jpg";
import { yupResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions";
import { Link } from "react-router-dom";

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    // .length(60, "Tối đa 60 ký tự")
    .required("Yêu cầu nhập tên tài khoản!"),
  password: yup
    .string()
    // .length(60, "Tối đa 60 ký tự")
    .required("Yêu cầu nhập mật khẩu!"),
});

function SignIn(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  useEffect(() => {
    /*==============================
              Section bg
    ==============================*/
    document
      .querySelectorAll(".section--bg, .details__bg")
      .forEach(function (item) {
        if (item.hasAttribute("data-bg")) {
          item.style.background = "url(" + item.getAttribute("data-bg") + ")";
          item.style.backgroundPosition = "center center";
          item.style.backgroundRepeat = "no-repeat";
          item.style.backgroundSize = "cover";
        }
      });
  });

  const onSubmit = (user) => {
    props.loginUser(user, props.history);
  };
  return (
    <React.Fragment>
      <div className="sign section--bg" data-bg={bgImg}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>
                  <a href="index.html" className="sign__logo">
                    <img
                      src={process.env.PUBLIC_URL + "/img/logo.svg"}
                      alt="LOGO"
                    />
                  </a>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Tài khoản"
                      name="username"
                      ref={register}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
                      className="sign__input"
                      placeholder="Mật khẩu"
                      name="password"
                      ref={register}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      defaultChecked
                    />
                    <label htmlFor="remember">Lưu đăng nhập</label>
                  </div>

                  <button className="sign__btn" type="submit">
                    Đăng nhập
                  </button>

                  <span className="sign__text">
                    Không có tài khoản? <Link to="register">Đăng ký!</Link>
                  </span>

                  <span className="sign__text">
                    <a href="#">Quên mật khẩu?</a>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};
export default connect(mapStateToProps, { loginUser })(SignIn);
