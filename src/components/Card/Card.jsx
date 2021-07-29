import React from 'react'
import { Container, Button } from './Card.style'
import { MdDeleteSweep } from 'react-icons/md'

const Card = ({name, min, max, img, onClose, id}) => {
    return (
        <Container>
             <Button onClick={() => onClose(id)}><b><MdDeleteSweep/></b></Button>
             <h2>{name}</h2>
             <h3>Min</h3>
            <span>{min}</span>
            <h3>Max</h3>
            <span>{max}</span>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={name}/>
        </Container>
    )
}

export default Card
