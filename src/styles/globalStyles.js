import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

body {
    width: 100%;
    font-family: "Roboto", sans-serif;
    background-image: url('../src/assets/paisagem.jpg') ;
    color: #333;
    line-height: 1.3;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 600px) {
        width: 100%;
        background-image: none;
        background: linear-gradient(2deg, rgba(9, 215, 222, 1) 0%, rgba(0, 155, 232, 0.8) 87%);
    }
    
}
`