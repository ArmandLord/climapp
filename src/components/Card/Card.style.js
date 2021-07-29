import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 40px;
    min-width: 400px;
    height: 500px;
    border: 2px solid rgba(255,255,255, 0.3);
    backdrop-filter: blur(12px);
    text-align: center;
    h2{
        margin: 0;
        font-size: 40px;
    }
    img{
        width: 110px;
    }
`
export const ContainerInf = styled.div`
    
    width:100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    text-align: center;
    font-size: 20px;
    border: 2px solid rgba(255,255,255, 0.3);
    background: transparent;
    margin-right: 20px;
    &:hover{
        background: rgba(255,255,255, 0.3);
    }
`

export const ContainerBtn = styled.div`
    width:100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
 
`

export const TempCo = styled.div`
     display: flex;
    flex-direction: column;
`
export const Div = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        width:100%;
        height: 120px;
`