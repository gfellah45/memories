import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PhotoProvider } from "./context/index";
import "./App.css";
import Landing from "./components/landing/Landing";
import "./assets/main.css";

import User from "./components/userdashboard/user/User";

function App() {
  return (
    <PhotoProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}></Route>

          <Route path="/user" exact component={User}></Route>
        </Switch>
      </Router>
    </PhotoProvider>
  );
}

export default App;
