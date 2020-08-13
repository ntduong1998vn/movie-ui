import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import OAuth2RedirectHandler from "./helpers/OAuth2RedirectHandler";
import ColorSwitcher from "./components/common/ColorSwitcher";
import NotificationContainer from "./components/common/react-notifications/NotificationContainer";
import { isMultiColorActive } from "./constants/defaultValues";
import { getDirection } from "./helpers/Utils";
import { AuthRoute } from "./components/AuthRoute";
import { getCurrentUser } from "./redux/actions";

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ "./views")
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./views/app")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./views/error")
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user")
);
const ViewSurvey = React.lazy(() =>
  import(/* webpackChunkName: "views-survey" */ "./views/survey")
);
class App extends Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }
  componentDidMount() {
    this.props.getCurrentUser(this.props.history);
  }

  // componentDidUpdate() {
  //   this.props.getCurrentUser();
  // }
  render() {
    const { locale, loginUser } = this.props;
    const currentAppLocale = AppLocale[locale];
    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Suspense fallback={<div className="loading" />}>
              <Switch>
                <AuthRoute
                  path="/app"
                  authUser={loginUser}
                  component={ViewApp}
                />
                <Route
                  path="/error"
                  exact
                  render={(props) => <ViewError {...props} />}
                />
                <Route
                  path="/user"
                  render={(props) => <ViewUser {...props} />}
                />
                <Route
                  path="/"
                  exact
                  render={(props) => <ViewMain {...props} />}
                />
                <Route
                  path="/oauth2/redirect"
                  component={OAuth2RedirectHandler}
                />
                <Redirect to="/error" />
              </Switch>
            </Suspense>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, settings }) => {
  const { user: loginUser } = authUser;
  const { locale } = settings;
  return { loginUser, locale };
};
const AppWithRouter = withRouter(App);
export default connect(mapStateToProps, { getCurrentUser })(AppWithRouter);
