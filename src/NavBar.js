import React, {useContext} from "react";
import "./Styles/NavBar.css";
import jwt from "jsonwebtoken";
import { useHistory } from "react-router-dom";
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
                    <a href="/">Contact</a>
                    <a href="/" onClick={logout}>Logout</a>
                    <a href={`/${username}`}>{username}</a>
                    <a className="active" href="/map">Active Events</a>
                </div>
            </div>
        )
    } else {
        return(
            <div className="nav-container">
                <div className="navbr-brand">
                    <a className="navbar-brand" href="/">🔥 FlameBuzz</a>
                </div>
                <div className="navbar-nav">
                    <a href="/">Contact</a>
                    <a href="/signup">Signup</a>
                    <a href="/login">Login</a>
                    <a className="active" href="/map">Active Events</a>
                </div>
            </div>
        )
    }
}

export default NavBar;