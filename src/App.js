import React from "react";
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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from "./pages/checkout/checkout";
import ContactPage from './pages/contact/contact';

import { GlobalStyle } from './global.styles';

class App extends React.Component {
  unsubscribeFromAuth = null; //Prevent memory leaks

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //Listen to authentication state changes on firebase backend
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //is there a userAuth?
        const userRef = await createUserProfileDocument(userAuth); //get userRef from createUserProfileDocument (if no document there a new one is created in this function)
        //documentSnapshot object allows us to check if a document exists at this query
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(), //spread in rest of data
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //Close subscription
  }

  render() {
    return (
      <div>
        <Router>
        <GlobalStyle/>
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
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
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
}

const mapStateToProps = createStructuredSelector({ //Get currentUser props from store
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //user is payload
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //Second argument of connect is mapDispatchToProps
