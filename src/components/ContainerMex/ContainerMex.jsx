import React from 'react'
import { ContMex, CardMex } from './ContainerMex.style'
import Pais from '../Pais/Pais'

const ContainerMex = () => {
    const mexico = {
        coord: {lon:120.7198,lat:15.0646},
        weather: {id:501, main:"Rain", description:"Moderate rain"},
        icon:"10d",
        main:{temp:26.75, feels_like:30.12, temp_min:26.75, temp_max:26.75,pressure:1007, humidity:91, sea_level:1007, grnd_level:1006},
        id:1699805,
        name:"Mexico"
    }
    
    return (
        <ContMex>
            <h1>ClimApp</h1>
            <CardMex>
                <Pais 
                    min={mexico.main.temp_min} 
                    max={mexico.main.temp_max} 
                    img={mexico.icon} 
                    name={mexico.name}
                    weather={mexico.weather.description} 
                    lon={mexico.coord.lon} 
                    lat={mexico.coord.lat}
                />
            </CardMex>
        </ContMex>
    )
}

export default ContainerMex
