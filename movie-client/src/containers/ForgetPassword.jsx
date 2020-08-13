/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import bgImg from "../assets/img/section/section.jpg";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { connect } from "react-redux";
import userAPI from "../repository/UserAPI"
const ForgetPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Chưa nhập email!"),
});

function ForgetPassword(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ForgetPasswordSchema),
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
    userAPI.forgetPassword(form.email)
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
                  <p 
                  style={{ 
                      color:'#ffffff',
                      fontSize:'25px',
                      marginBottom:'35px'
                    }}
                  >Quên Mật Khẩu</p>
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
                  <button className="sign__btn" type="submit">
                    Gửi Mail
                  </button>

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

export default connect(null, {  })(ForgetPassword);