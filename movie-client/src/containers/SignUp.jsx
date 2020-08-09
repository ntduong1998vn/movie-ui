/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import bgImg from "../assets/img/section/section.jpg";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions";
const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    .max(60, "Tối đa 60 ký tự")
    .required("Yêu cầu nhập tên tài khoản!"),
  password: yup
    .string()
    .required("Yêu cầu nhập mật khẩu mới!")
    .min(6, "Tối thiểu 6 ký tự!")
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
      "Mật khẩu phải chứa số và chữ"
    ),
  name: yup
    .string()
    .max(60, "Tối đa 60 ký tự")
    .required("Bạn chưa nhập họ tên!"),
  email: yup.string().email().required("Chưa nhập email!"),
  policy: yup
    .boolean()
    .oneOf([true], "Bạn chưa đồng ý chính sách của chúng tôi!"),
});

function SignUp(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

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

  function onSubmit(form) {
    props.registerUser(form, props.history);
  }

  return (
    <React.Fragment>
      <div className="sign section--bg" data-bg={bgImg}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* <!-- registration form --> */}
                <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>
                  <Link to="/" className="sign__logo">
                    <img
                      src={process.env.PUBLIC_URL + "/img/logo.svg"}
                      alt="LOGO"
                    />
                  </Link>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Tên"
                      name="name"
                      ref={register}
                    />
                    {errors.name && (
                      <p style={{ color: "white" }}>{errors.name.message}</p>
                    )}
                  </div>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Tài khoản"
                      name="username"
                      ref={register}
                    />
                    {errors.username && (
                      <p style={{ color: "white" }}>
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                      name="email"
                      ref={register}
                    />
                    {errors.email && (
                      <p style={{ color: "white" }}>{errors.email.message}</p>
                    )}
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
                      className="sign__input"
                      placeholder="Mật khẩu"
                      name="password"
                      ref={register}
                    />
                    {errors.password && (
                      <p style={{ color: "white" }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      type="checkbox"
                      name="policy"
                      checked
                      ref={register}
                    />
                    {errors.policy && (
                      <p style={{ color: "white" }}>{errors.policy.message}</p>
                    )}
                    <label htmlFor="remember">
                      Tôi đồng ý với <a href="#">Chính sách Bảo mật</a>
                    </label>
                  </div>

                  <button className="sign__btn" type="submit">
                    Đăng ký
                  </button>

                  <span className="sign__text">
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
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

export default connect(null, { registerUser })(SignUp);
