import React from 'react'
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY = "2ea6c5eeb2f8798bc6b684573632b1c2";

class App extends React.Component {

  state = {
    temprature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }

  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=2ea6c5eeb2f8798bc6b684573632b1c2`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      temprature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : ""
    })

  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather = {this.getWeather} />
        <Weather
            temprature = {this.state.temprature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            error = {this.state.error}
         />
      </div>
    )
  }
}

export default App
