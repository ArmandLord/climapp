import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerI = styled.div`
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    padding: 50px;
    display: flex;
    flex-direction: column;
`

export const Btn = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 40px;
    
    &:hover{
        color: rgba(255,255,255,0.8); 
    }
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    h2{
        color: #ffffff;
        font-size: 45px;
    }
    
`

export const Imagen = styled.div`
    
    width: 35%;
    height: 70%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img{
        width: 200px;
    }
`

export const ConInf = styled.div`
    width: 65%;
    height: 70%;
    font-size: 20px;
    color: #ffffff;
    text-align: justify;
    
`

export const Contacto = styled.div`
    width: 100%;
    height: 300px;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 50px;
    a{
        text-decoration: none;
        color: #ffffff;
        &:hover{
            color: rgba(255,255,255,0.8)
        }
    }
    
`
