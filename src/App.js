import React, { Component } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import AdminCard from "./components/AdminCard";
import "./App.css";
import routes from "./routes";
import {withRouter} from "react-router-dom"


class App extends Component {
  render() {
    console.log(this.props.location)
    return (
      <div className="App">
        {this.props.location.pathname !="/" ? <NavBar/> : <div></div>}
        {routes}
      </div>
    );
  }
}

export default withRouter(App)
