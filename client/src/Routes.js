import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen />
        </Route>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/signup">
          <SignUpScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
