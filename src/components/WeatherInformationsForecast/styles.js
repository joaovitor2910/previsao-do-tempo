import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

export const ForecastList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ForecastInfo = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 600px) {
    padding: 50px;
  }
`;

export const ForecastDay = styled.p`
  text-transform: capitalize;
  font-size: 1.1rem;
`;

export const ForecastDescription = styled.p`
  text-transform: capitalize;
  font-size: 1.1rem;
`;