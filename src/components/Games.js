import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import Trending from "./Trending"
import MoC from "./Cheats/MoC"

class Games extends Component {
 
  render() { 
    return ( 
    <div className="GB">
    <Trending/>
      <MoC/>
      <div className="Card"></div>
    </div> );
  }
}
 
export default Games;