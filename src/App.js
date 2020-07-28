import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/header/header";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { createStructuredSelector } from "reselect";

import ContactPage from "./pages/contact/contact";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { GlobalStyle } from "./global.styles";

//Const to dynamically import
//Homepage is only rendered when user is on this path to save user having to download it when they might not need to use it
const HomePage = lazy(() => import("./pages/homepage/homepage")); //Lazy loaded
const ShopPage = lazy(() => import("./pages/shop/shopComponent"));
const SignInAndSignUpPage = lazy(() => import("./pages/SignIn-Up/SignIn-Up"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); //Similar to componentDidMount

  return (
    <div>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/contact" component={ContactPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  //Get currentUser props from store
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //Second argument of connect is mapDispatchToProps
