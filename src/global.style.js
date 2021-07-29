import styled from 'styled-components'

export const Bakground = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    
    height: 100vh;
    /* background: rgb(85,205,255);
    background: linear-gradient(180deg, rgba(85,205,255,1) 0%, rgba(1,6,78,1) 90%); */
    background-image: url('https://i.pinimg.com/originals/88/4b/83/884b83373234dbc47fa19487b88bfd2f.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ContainerMax = styled.div`
    height: 92%;
    width: 95%;
    display: flex;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    max-width: 1800px;
`

export const ContainerMin = styled.div`
    height: 100%;
    width: 40%;
    min-width: 400px;
    background:  transparent;
    backdrop-filter: blur(11px);
    border-right: 2px solid rgba(255, 255, 255, 0.08);
`
export const ContainerMin2 = styled.div`
    height: 100%;
    width: 60%;
    
`