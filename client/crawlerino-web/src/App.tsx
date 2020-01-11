import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHeader from "./components/header/app-header";
import UserSelection from "./components/user-selection/user-selection";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <AppHeader />
        <Switch>
          {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
          <Route path="/">
            <UserSelection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
