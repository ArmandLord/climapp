import styled from 'styled-components'

export const ContainerDetail = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`
export const Detalle = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const H2 = styled.h2`
    color: #ffffff;
    font-size: 35px;
`

export const Nav = styled.div`
    height: 100px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h3{
        color: #ffffff;
        font-size: 28px;
        text-decoration: none;
        &:hover{
        color: rgba(255,255,255,0.8); 
        }
    }
`