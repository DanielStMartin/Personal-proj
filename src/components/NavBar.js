import React  from "react"
import img from "../pics/img-fandom.png"
import loginpic from "../pics/login.png"
import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className = "nav-Bar">
        {/* <Navmodal  */}
        <div className="Nav-1">
        <Link to = "/"><img className = "logo" src = {img} alt=""></img></Link>
        <h1 className = "Name">NERD NATION</h1>
        </div>
        <div className="nav-items">
        <Link to = "/Games"><h1 className = "Games">GAMES</h1> </Link>
        <Link to = "/Movies"><h1 className = "Movies">MOVIES</h1> </Link>
        <Link to = "/Tv"><h1 className = "Tv">TV</h1> </Link>
        <Link to = "/Store"><h1 className = "Anime">Store</h1> </Link>
        <Link to = "/Cart"><h1 className = "Anime">Cart</h1> </Link>
        <Link to = "/Login"><img className = "login-logo" src = {loginpic}alt=""></img></Link>
        </div>
        </div>
    )
}
