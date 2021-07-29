import React from 'react'
import { ContainerPais, Temp } from './Pais.style'

const Pais = ({min, max, img, name, weather, lon, lat}) => {
    return (
        <ContainerPais>
            <h2>{name} 🇲🇽</h2>
            <small>Lon: {lon} Lat: {lat}</small>
            <span>{weather}</span>
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
        </ContainerPais>
    )
}

export default Pais
