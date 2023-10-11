import React from 'react';
import "./style.css"
const Header = () => {
    let name = "Max";
    return (
        <div>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>
                            Hi, my name is <em>{name}</em>
                        </strong>
                        <br />a Front-end devolper
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <a href="#!" className="btn">
                        Download CV
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Header;