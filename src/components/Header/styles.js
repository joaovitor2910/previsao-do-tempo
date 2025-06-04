import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;

    p {
        font-size: 22px;
        margin-right: 20px;
        transition: 0.2s ease-in;
        cursor: pointer;
        font-weight: bold;

        &:hover {
            color: #ff9800;
        }
    }
`
export const NavContainer= styled.nav`
    width: 500px;
    display: flex;
    justify-content: space-around;
`
export const Logo = styled.img`
    width: 100px;
    height: 80px;
    margin-left: 20px;
`

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    
`