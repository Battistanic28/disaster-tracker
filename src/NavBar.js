import React, {useContext} from "react";
import "./Styles/NavBar.css";
import jwt from "jsonwebtoken";
import { useHistory, NavLink } from "react-router-dom";
import UserContext from "./Auth/UserContext";

function NavBar() {

    const {token, setToken} = useContext(UserContext);
    const history = useHistory();

    function logout() {
        localStorage.removeItem('token')
        setToken("")
        history.push("/")
    }

    if(token) {
        
        const {username} = jwt.decode(token);
        return(
            <div className="nav-container">
                <div className="navbr-brand">
                    <a className="navbar-brand" href="/">🔥 FlameBuzz</a>
                </div>
                <div className="navbar-nav">
                    <NavLink exact to="/" onClick={logout}>Logout</NavLink>
                    <NavLink exact to={`/user/${username}`}>{username}</NavLink>
                    <NavLink exact to="/map">Active Events</NavLink>
                </div>
            </div>
        )
    } else {
        return(
            <div className="nav-container">
                <div className="navbr-brand">
                    <NavLink className="navbar-brand" to="/">🔥 FlameBuzz</NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink exact to="/signup">Sign up</NavLink>
                    <NavLink exact to="/login">Login</NavLink>
                    <NavLink exact to="/map">Active Events</NavLink>
                </div>
            </div>
        )
    }
}

export default NavBar;