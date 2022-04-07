import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
            </div>
          </div>
        </footer>
    )
}

export default Footer;