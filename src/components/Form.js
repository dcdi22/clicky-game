import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4">Clicky Game</h1>
                    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        );
    }
};

// <form onSubmit={this.props.getWeather}>
            //     <input type="text" name="city" placeholder="city"></input>
            //     <input type="text" name="country" placeholder="country"></input>
            //     <button>Get Weather</button>
            // </form>

export default Form;