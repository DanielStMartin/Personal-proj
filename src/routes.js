import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Games from "./components/Games";
import Anime from "./components/Anime";
import Tv from "./components/Tv";
import Movies from "./components/Movies";
import Home from "./components/Home"
import Trend from "./components/Trend"
import Store from "./components/Store";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Register from "./components/Register"

export default (
  <Switch>
    <Route exact path = "/" component = { Home }/>
    <Route exact path="/Login" component={Login} />
    <Route  path="/register" component={Register} />
    <Route exact path="/Games" component={Games} />
    <Route exact path="/Movies" component={Movies} />
    <Route exact path="/Tv" component={Tv} />
    <Route exact path="/Anime" component={Anime} />
    <Route exact path="/Trend" component={Trend} />
    <Route  path="/Store" component={Store}  />
    <Route  path="/Cart" component={Cart} />
    <Route  path="/Checkout" component={Checkout} />
    
  </Switch>
);
