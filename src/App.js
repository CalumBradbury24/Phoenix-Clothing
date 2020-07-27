import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/SignIn-Up/SignIn-Up";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout";
import ContactPage from "./pages/contact/contact";
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from "./global.styles";

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])//Similar to componentDidMount

    return (
      <div>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  //Get currentUser props from store
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(mapStateToProps, mapDispatchToProps)(App); //Second argument of connect is mapDispatchToProps
