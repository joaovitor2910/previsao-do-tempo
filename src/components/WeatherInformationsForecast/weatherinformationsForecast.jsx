import './styles.js'
import { Container, ForecastDay, ForecastDescription, ForecastInfo, ForecastList } from './styles.js'

function WeatherInfosForecast({ weatherForecast }) {

    console.log(weatherForecast)
    let dailyForecast = {}

    for (let forecast of weatherForecast.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        console.log(date)

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }
    const next5Days = Object.values(dailyForecast).slice(1, 6)

    console.log(next5Days)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate
    }

    return (
        <Container>
            <h3>Próximos Dias</h3>
            <ForecastList>
                {next5Days.map(forecast => (
                    <ForecastInfo key={forecast.dt}>
                        <ForecastDay>{convertDate(forecast)}</ForecastDay>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="" />
                        <ForecastDescription>{forecast.weather[0].description}</ForecastDescription>
                        <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
                    </ForecastInfo>
                ))}
            </ForecastList>
        </Container>
    )
}

export default WeatherInfosForecast