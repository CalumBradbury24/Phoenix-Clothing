import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/SignIn-Up/SignIn-Up";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; //Prevent memory leaks

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); //Close subscription
  }

  render() {
    return (
      <div>
        <Router>
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
