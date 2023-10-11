import React from 'react';
import inst from "../../img/icons/instagram.svg";
import linkedn from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";
import "./style.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">

                            <li className="social__item">
                                <a href="#!">
                                    <img src={inst} alt="Link" />
                                </a>
                            </li>

                            <li className="social__item">
                                <a href="#!">
                                    <img src={linkedn} alt="Link" />
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="#!">
                                    <img src={gitHub} alt="Link" />
                                </a>
                            </li>
                        </ul>
                        <div className="copyright">
                            <p>© 2022 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;