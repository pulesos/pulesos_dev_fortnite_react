import React from "react";
import './Header.css';

const Header = (props) => {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Fortnite Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/pulesos/pulesos_dev_fortnite_react">My Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;