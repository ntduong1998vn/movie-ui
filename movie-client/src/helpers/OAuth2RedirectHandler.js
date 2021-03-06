import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthToken } from "./axios.instance";
// import { getCurrentUserInfor } from "../redux/actions";
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
   console.log(token)
    setAuthToken(token);
    // this.props.getCurrentUserInfor(token, this.props.history);
    return <div>Loading...</div>;
    // if (token) {
    //   // localStorage.setItem(ACCESS_TOKEN, token);
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/", // Xác thực thành công chuyển sang url admin
    //         state: {
    //           from: this.props.location,
    //         },
    //       }}
    //     />
    //   );
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
  const { user, loading, error } = authUser;
  return { user, loading, error };
};

export default connect(mapStateToProps, {
  // getCurrentUserInfor,
})(OAuth2RedirectHandler);
