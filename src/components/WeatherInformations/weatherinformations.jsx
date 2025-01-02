import './weatherinformations.css'

function WeatherInfos({weather}) {
    const urlIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    

    return (
        <div className="weather-container">
            <h2>{weather.name}</h2>
            <div className="weather-infos">
                <img src={urlIcon} />
                <p className="temp">{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className="description">{weather.weather[0].description}</p>
            <div className="details">
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default WeatherInfos