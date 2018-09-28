import React from "react";

class Titles extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav navbar-dark nav-fill text-white py-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Clicky Game</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Click Image to Start</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Score: 0 | Top Score: 0</a>
                    </li>
                </ul>
            </div>
        )
    };
};

export default Titles;