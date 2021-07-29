import React from 'react'
import { ContMex, CardMex } from './ContainerMex.style'

const ContainerMex = () => {
    const mexico = {
        coord: {lon:120.7198,lat:15.0646},
        weather: {id:501, main:"Rain", description:"moderate rain"},
        icon:"10d",
        main:{temp:26.75, feels_like:30.12, temp_min:26.75, temp_max:26.75,pressure:1007, humidity:91, sea_level:1007, grnd_level:1006},
        id:1699805,
        name:"Mexico"
    }
    
    return (
        <ContMex>
            <h1>ClimApp</h1>
            <CardMex>
                <h1>{mexico.name}</h1>
                <img src={`http://openweathermap.org/img/wn/${mexico.icon}@2x.png`} alt={mexico.name}/>
            </CardMex>
        </ContMex>
    )
}

export default ContainerMex
