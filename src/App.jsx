import {  useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInfos from './components/WeatherInformations/weatherinformations'
import WeatherInfosForecast from './components/WeatherInformationsForecast/weatherinformationsForecast'
import Header from './components/Header'

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
     <>
      <Header />
      <div id='containerID' className='container'>
        <div className='content'>
        <h1>Previsão Do Tempo <br></br> Diária e Semanal</h1>
        <h3>Obtenha a previsão do tempo mais recente para hoje e para os próximos dias com informações
        atualizadas sobre temperatura, umidade e muito mais.</h3>
        <div className='pesquisa'>
        <input type="text" ref={inputRef} placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>
        </div>
        </div>

        {weather &&  <WeatherInfos weather={weather}/>}
      </div>
        {weatherForecast &&  <WeatherInfosForecast weatherForecast={weatherForecast}/>}
     </>
  )
}

export default App
