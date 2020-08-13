import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PaidPage from "./PaidPage";
import ErrorPage from "./ErrorPage";
import Footer from "../components/Footer";
import MoveDetailPage from "./MovieDetailPage";
import HomePage from "./HomePage";
import CatalogPage from "./CatalogPage";
import UserPage from "./UserPage";
import ForgetPassword from "./ForgetPassword"
import PrivateRoute from "../components/Common/PrivateRoute";
import RestrictedRoute from "../components/Common/RestrictedRoute";
import { ACCESS_TOKEN } from "../constants/auth";
import { getUserInfor } from "../redux/actions";
import OAuth2RedirectHandler from "../components/Common/OAuth2RedirectHandler";
const App = (props) => {
  useEffect(() => {
    console.log(localStorage.getItem(ACCESS_TOKEN));
    if (
      localStorage.getItem(ACCESS_TOKEN) !== null &&
      localStorage.getItem(ACCESS_TOKEN) != ""
    ) {
      console.log("Load User");
      props.getUserInfor();
    }
    return () => {};
  }, []);
  return (
    <React.Fragment>
      <Header user={props.user} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        {/* localhost/tim-kiem?genre=Action+Romance&title=Duong&.... */}
        <Route
          path="/tim-kiem/"
          render={(props) => <CatalogPage {...props} />}
        />
        <Route
          path="/movie/:id"
          render={(props) => <MoveDetailPage {...props} />}
        />
        <RestrictedRoute
          path="/login"
          authenticated={props.user}
          restricted
          component={SignIn}
        />
        <RestrictedRoute
          authenticated={props.user}
          restricted
          path="/register"
          component={SignUp}
        />
        <Route
          path="/update-account"
          render={(props) => <PaidPage {...props} />}
        />
        <Route
          path="/forget-password"
          render={(props) => <ForgetPassword {...props}/>}
        />
        <PrivateRoute
          authenticated={props.user}
          path="/user"
          // render={(props) => <UserPage {...props} />}
          component={UserPage}
        />
        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
        {/* <Route path="/genre/:type/:page" component={CatalogPage} /> */}
        {/* <Route path="/genre/:id" component={GenrePage} /> */}
        <Route component={ErrorPage} />
        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};
export default connect(mapStateToProps, { getUserInfor })(App);
