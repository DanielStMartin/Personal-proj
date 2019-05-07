import React, { Component } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import TC from "./Cheats/TvC"
import Trending from"./Trending"
import "./Tv.css"



class Tv extends Component {
  state = {  }
  render() { 
    return ( <div className="TB">
      <TC/>
      <Trending/>
    </div> );
  }
}
 
export default Tv;
