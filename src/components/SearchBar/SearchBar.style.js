import styled from 'styled-components'

export const ContainerSearch = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
    input{
        background-color: transparent;
        width: 400px;
        height: 70px;
        font-size: 25px;
        color: #ffffff;
        border: none;
        border-bottom: 2px solid rgba(255, 255, 255, 0.25);
        outline: none;
        &::placeholder{
            color: rgba(255, 255, 255, 0.25);
        }
    }
    button{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: transparent;
        backdrop-filter: blur(10px);
        color: #ffffff;
        font-size: 30px;
        cursor: pointer;
        border: none;
        &:hover{
            border: 2px solid rgba(255, 255, 255, 0.09);
            
        }
    }
`