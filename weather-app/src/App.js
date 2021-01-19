import React, { useState,useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';


const App = () => {

  const API_KEY = "2ea6c5eeb2f8798bc6b684573632b1c2";

  useEffect(() => {
    getWeather();
  },[]);

  const getWeather  = async (e) => {
    // e.preventDefault();
 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=2ea6c5eeb2f8798bc6b684573632b1c2`);
    const data = await api_call.json();
    console.log(data);
  }

  return (
    <div className="App">
      <Title />
      <Form getWeather = {getWeather}/>
      <Weather />
    </div>
  );
}

export default App;
