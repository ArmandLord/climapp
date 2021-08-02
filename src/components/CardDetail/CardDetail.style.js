import styled from 'styled-components'

export const CardDet = styled.div`
    background: transparent;
    backdrop-filter: blur(11px);
    border: 2px solid rgba(255,255,255,0.2);
    width: 400px;
    height: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    h2{
        margin: 0;
        font-size: 55px;
    }
    small{
        color: grey;
        margin-bottom: 40px;
        font-size: 12px;
    }
    h3{
        font-size: 25px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        
        width:100%;
        height: 120px;
    }
`