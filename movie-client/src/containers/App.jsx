import React from "react";
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
import AuthRoute from "../helpers/AuthRoute";

const App = (props) => {
  return (
    <React.Fragment>
      <Header user={props.user} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        {/* localhost/tim-kiem?genre=Action+Romance&title=Duong&.... */}
        <Route
          path="/genre/:id/:page"
          render={(props) => <CatalogPage {...props} />}
        />
        {/* <Route
          path="/timkiem?title=:searchTerm"
          render={props => <CatalogPage {...props} />}
        /> */}
        <Route
          path="/movie/:id"
          render={(props) => <MoveDetailPage {...props} />}
        />
        <Route path="/sign-in" render={(props) => <SignIn {...props} />} />
        <Route path="/sign-up" render={(props) => <SignUp {...props} />} />
        <Route
          path="/update-account"
          render={(props) => <PaidPage {...props} />}
        />
        {/* <Route path="/genre/:type/:page" component={CatalogPage} /> */}
        {/* <Route path="/genre/:id" component={GenrePage} /> */}
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};
export default connect(mapStateToProps, null)(App);
