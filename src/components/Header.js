import React from "react";

const Header = props => (
    <div>
                <ul className="nav navbar-dark nav-fill text-white py-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Clicky Game</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Click Image to Start</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Score: 
                        {props.score} 
                        </a>
                    </li>
                </ul>
            </div>
)

export default Header;