import React, { Component } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import MoC from "./Cheats/MoC"
import "./Movies.css"
import Trending from "./Trending"


class Movies extends Component {
 
  render() { 
    return ( 
    <div className="MB">
    <Trending/>
      <MoC/>
      <div className="Card"></div>
    </div> );
  }
}
 
export default Movies;

