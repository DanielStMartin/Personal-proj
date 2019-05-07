import React from "react";
import axios from "axios";
// import YouTube from 'react-youtube';
import "./Home.css";
import Trend from "./Trend"
import TC from "./Cheats/TvC"

export default function Home() {
  return (
    <div className="fancy">
    <ul>
      <li><a href="/Games">Games</a></li>
      <li><a href="/Movies">Moves</a></li>
      <li><a href="/Tv">Tv</a></li>
      <li><a href="/Store">Store</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Profile</a></li>
    </ul>
   
    </div>
  );
}

