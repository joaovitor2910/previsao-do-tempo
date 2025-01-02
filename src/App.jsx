import {  useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInfos from './components/WeatherInformations/weatherinformations'
import WeatherInfosForecast from './components/WeatherInformationsForecast/weatherinformationsForecast'

function App() {
  const [weather, setWeather] = useState()
  const [weatherForecast, setWeatherForecast] = useState()
  const inputRef = useRef()

  
 
  async function searchCity() {

    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = "12c1e21e5299d2ee14b0b4b61a774319"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${key}&units=metric`

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`

    const apiInfoData = await axios.get(url)
    const apiForecast = await axios.get(urlForecast)

    setWeather(apiInfoData.data)
    setWeatherForecast(apiForecast.data)

    console.log(apiForecast.data)
    console.log(apiInfoData.data)
  }

  return (
      <div id='containerID' className='container'>
        <h1>Previsão do tempo</h1>
        <input type="text" ref={inputRef} placeholder='digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>

        {weather &&  <WeatherInfos weather={weather}/>}
        {weatherForecast &&  <WeatherInfosForecast weatherForecast={weatherForecast}/>}
      </div>
  )
}

export default App
