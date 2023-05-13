import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
    </Switch>
  );
};

export default Routes;
