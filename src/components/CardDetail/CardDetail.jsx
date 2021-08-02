import React from 'react'
import { Temp } from '../Pais/Pais.style'
import { CardDet } from './CardDetail.style'

const CardDetail = ({min, max, img, name, weather, latitud, longitud}) => {
    return (
        <CardDet>
            <h2>{name}</h2>
            <small>Lon: {longitud} Lat: {latitud}</small>
            <h3>{weather}</h3>
            <div>
                <Temp>
                    <h3>Min</h3>
                    <span>{min}</span>
                </Temp>
                <Temp>
                    <h3>Max</h3>
                    <span>{max}</span>
                </Temp>
            </div>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={name}/>
        </CardDet>
    )
}

export default CardDetail
