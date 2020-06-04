import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopComponent";

function App() {
  return (
    <div> 
      <Router>
        <Switch>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
