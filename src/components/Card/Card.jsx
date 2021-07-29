import React from 'react'
import { Container, Button, ContainerBtn, TempCo, Div, ContainerInf } from './Card.style'
import { MdDeleteSweep } from 'react-icons/md'

const Card = ({name, min, max, img, onClose, id}) => {
    return (
        <Container>
            <ContainerBtn>
                <Button onClick={() => onClose(id)}><b><MdDeleteSweep/></b></Button>
            </ContainerBtn>
            <ContainerInf>
             <h2>{name}</h2>
                <Div>
                    <TempCo>
                        <h3>Min</h3>
                        <span>{min}</span>
                    </TempCo>
                    <TempCo>
                        <h3>Max</h3>
                        <span>{max}</span>
                    </TempCo>
                </Div>
             <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={name}/>
            </ContainerInf>
        </Container>
    )
}

export default Card
