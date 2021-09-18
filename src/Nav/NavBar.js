import "../Styles/NavBar.css";

function NavBar() {
    return(
        <div className="nav-container">
            <div className="navbr-brand">
                <a className="navbar-brand" href="#">🔥 Tracker</a>
            </div>
            <div className="navbar-nav">
                <a href="#contact">Contact</a>
                <a href="#news">News</a>
                <a href="#login">Login</a>
                <a href="#signup">Signup</a>
                <a className="active" href="#evetns">Active Events</a>
            </div>
        </div>
    )
}

export default NavBar;