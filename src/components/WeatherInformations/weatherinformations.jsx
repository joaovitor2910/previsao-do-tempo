import './styles.js'
import { Container, Description, Details, Hoje, Temp, WeatherImage } from './styles.js'

function WeatherInfos({weather}) {
    const urlIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    

    return (
        <Container>
            <h2>{weather.name}</h2>
         
                <WeatherImage src={urlIcon} />
                <Hoje>Hoje</Hoje>
                <Temp>{Math.round(weather.main.temp)}°C</Temp>
    
            <Description>{weather.weather[0].description}</Description>
            <Details>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Ventos: {Math.round(weather.wind.speed)} km/h</p>
            </Details>
        </Container>
    )
}

export default WeatherInfos