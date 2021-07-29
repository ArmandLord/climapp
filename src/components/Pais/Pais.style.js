import styled from 'styled-components'

export const ContainerPais = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        margin: 0;
        font-size: 45px;
    }
    small{
        color: grey;
        margin-bottom: 40px;
        font-size: 10px;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        
        width:100%;
        height: 120px;
    }
    img{
        width: 110px;
    }
`

export const Temp = styled.div`
    display: flex;
    flex-direction: column;
    
`