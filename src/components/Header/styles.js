import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;

    li {
        display: flex;
        align-items: center;
    }

    p {
        font-size: 22px;
        margin-right: 20px;
        transition: 0.2s ease-in;
        cursor: pointer;
        text-align: center;
        font-weight: bold;

        &:hover {
            color: #ff9800;
        }
    }
    @media (max-width: 600px ) {
        display: none;
    }
`
export const NavContainer= styled.nav`
    width: 500px;
    display: flex;
    justify-content: space-around;
    text-align: center;
`
export const Logo = styled.img`
    width: 100px;
    height: 80px;
    margin-left: 20px;
    cursor: pointer;
`

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    
`