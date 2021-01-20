import React from 'react'
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'
// import './App.css'

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

    if(city && country){
      console.log(data);
      this.setState({
        temprature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ""
      });
    } else {
      this.setState({
        temprature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : "Please enter the values"
    });
  }
  }

  render() {
    return (
      <div>
        <div className = "wrapper">
          <div className ="main">
            <div className = "container">
              <div className = "row">
                <div className = "col-xs-5 title-container">
                  <Title />
                </div>
                <div className = "col-xs-7 form-container">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;