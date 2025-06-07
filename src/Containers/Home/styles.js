import styled from "styled-components";
import Lupa from '../../assets/lupa.png'

export const Container = styled.div`
  height: 100vh;
  max-width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:1024px) {
    height: 60vh;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  @media (max-width:768px) {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 20px;

  @media (max-width:1024px) {
    display: flex;
    align-items: start;
    justify-content: start;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    justify-content: start;
    align-items: start;
    padding: 0;
  }
`;

export const Pesquisa = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;

  @media (max-width: 600px) {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  
  @media (max-width:768px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;

  @media (max-width:768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Input = styled.input`
  padding: 20px;
  border-radius: 5px 0 0 5px;
  border: none;
  width: 80%;
  max-width: 600px;
  outline: none;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 600px) {
    max-width: 100%;
    display: flex;
    margin: 0;
    padding: 30px 5px;
    font-size: 20px;
    height: 30px;
  }

  &::placeholder {
    font-weight: bold;
  }
`;

export const Button = styled.button`
  background-color: #ff9800;
  border: 0;
  padding: 20px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;


  &:hover {
    background-color: #f57c00;
  }

  @media (max-width: 600px) {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 21px 0px;
    color: transparent;
    background-color: rgba(255, 255, 255, 0.8);
    background-image: url(${Lupa});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 20px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

