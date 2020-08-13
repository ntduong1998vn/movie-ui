import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfor } from "../../redux/actions";
import { ACCESS_TOKEN } from "../../constants/auth";
class OAuth2RedirectHandler extends Component {
  getUrlParameter(name) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");
    console.log(token);
    localStorage.setItem(ACCESS_TOKEN, token);
    this.props.getUserInfor();
    if (this.props.isAuth) {
      return (
        <Redirect
          to={{
            pathname: "/", // Xác thực thành công chuyển sang url admin
            state: {
              from: this.props.location,
            },
          }}
        />
      );
    } else {
      return <div>Loading...</div>;
    }
    // if (token) {
    //   // localStorage.setItem(ACCESS_TOKEN, token);

    // } else {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/",
    //         state: {
    //           from: this.props.location,
    //           error: error,
    //         },
    //       }}
    //     />
    //   );
    // }
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, isAuth, error } = authUser;
  return { user, isAuth, error };
};

export default connect(mapStateToProps, {
  getUserInfor,
})(OAuth2RedirectHandler);
