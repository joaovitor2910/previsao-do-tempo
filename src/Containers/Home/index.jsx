import {
  Button,
  Container,
  Content,
  Input,
  Pesquisa,
  Subtitle,
  Title,
} from "./styles";
import { useRef, useState } from "react";
import axios from "axios";
import WeatherInfos from "../../components/WeatherInformations/weatherinformations";
import WeatherInfosForecast from "../../components/WeatherInformationsForecast/weatherinformationsForecast";
import Header from "../../components/Header";

function Home() {
  const [weather, setWeather] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const inputRef = useRef();

  async function searchCity() {
    console.log(inputRef.current.value);
    const city = inputRef.current.value;
    const key = "12c1e21e5299d2ee14b0b4b61a774319";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${key}&units=metric`;

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`;

    const apiInfoData = await axios.get(url);
    const apiForecast = await axios.get(urlForecast);

    setWeather(apiInfoData.data);
    setWeatherForecast(apiForecast.data);

    console.log(apiForecast.data);
    console.log(apiInfoData.data);
  }

  return (
    <>
      <Header />
      <Container id="containerID">
        <Content>
          <Title>
            Previsão Do Tempo <br></br> Diária e Semanal
          </Title>
          <Subtitle>
            Obtenha a previsão do tempo mais recente para hoje e para os
            próximos dias com informações atualizadas sobre temperatura, umidade
            e muito mais.
          </Subtitle>
          <Pesquisa>
            <Input
              type="text"
              ref={inputRef}
              placeholder="Digite o nome da cidade"
            />
            <Button onClick={searchCity}>Buscar</Button>
          </Pesquisa>
        </Content>

        {weather && <WeatherInfos weather={weather} />}
      </Container>
      {weatherForecast && (
        <WeatherInfosForecast weatherForecast={weatherForecast} />
      )}
    </>
  );
}

export default Home;
