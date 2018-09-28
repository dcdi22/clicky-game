import React from "react";
import Card from "./Card";
import data from "../image.json"

const Weather = props => (
        <div className="container-fluid text-center">
            <div className="container">
            <div class="row">
            {data.map((el) => (<Card key={el.id} name={el.name} image={el.image} />))}
					
				</div>
            
            
            </div>
        </div>
    )


    // {props.city && props.country && <p>Location: {props.city}, {props.country} </p>}
    // {props.temp && <p>Temperature: {props.temp}F</p> }
    // {props.humidity && <p>Humidity: {props.humidity}%</p> }
    // {props.description && <p>Conditions: {props.description}</p> }
    // {props.error && <p>{props.error}</p>}

// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//             {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country} </p>}
//             {this.props.temp && <p>Temperature: {this.props.temp}F</p> }
//             {this.props.humidity && <p>Humidity: {this.props.humidity}%</p> }
//             {this.props.description && <p>Conditions: {this.props.description}</p> }
//             {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         )
//     }
// }



export default Weather;