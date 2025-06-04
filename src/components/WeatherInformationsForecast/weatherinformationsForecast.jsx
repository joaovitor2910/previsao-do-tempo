import './weatherinformationsForecast.css'

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
        <div className='forecast-container'>
            <h3>Próximos Dias</h3>
            <div className='forecast-list'>
                {next5Days.map(forecast => (
                    <div className='forecast-info' key={forecast.dt}>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="" />
                        <p className='forecast-description'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInfosForecast