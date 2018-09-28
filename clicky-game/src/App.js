import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "65012644a20da3e014e8360e6be80e83";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      })
    }
  }
  render() {
    return(
      <div>
       <Titles />
       <Form getWeather={this.getWeather} /> 
       <Weather 
       temp={this.state.temp} 
       city={this.state.city}
       country={this.state.country}
       humidity={this.state.humidity}
       description={this.state.description}
       error={this.state.error}
       />
      </div>
    )
  }
}

export default App;
