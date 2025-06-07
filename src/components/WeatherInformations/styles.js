import styled from "styled-components";

export const Container = styled.div`
  max-height: 550px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 50px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 10px;

  h2 {
    font-size: 2rem;
  }

  @media (max-width:768px) {
    max-width: 300px;
    max-height: 600px;
    padding: 15px 30px;
    margin-top: 15px;
  }

  @media (max-width: 600px) {
    min-width: 95%;
    max-width: 95%;
    margin-top: 50px;
    padding: 40px 0;
  }
`;

export const WeatherImage = styled.img`
  width: 120px;
  margin: 0 auto;
`;

export const Hoje = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Temp = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;

export const Description = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
`;