import React,{useState, useEffect} from 'react'
import { Bakground, ContainerMax } from '../../global.style';
import { ContainerDetail, Nav, Detalle, H2 } from './CardId.style'
import { Btn } from '../ClimAppInfo/ClimApp.style'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import CardDetail from '../../components/CardDetail/CardDetail';

const CardId = ({id}) => {
    // console.log(id);
    const [ciudad, setCiudad] = useState({})
    useEffect(()=> onSearch(id),[id])
    function onSearch(id){
        // console.log(id);
        const apiKey = "6448b47234025fbd1d4f4777e67eaa18"
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`)
        .then(re => re.json())
        .then(data => {
          
          if (data.cod === 200) {
            const ciudad = {
              min: data.main.temp_min,
              max: data.main.temp_max,
              img: data.weather[0].icon,
              id: data.id,
              wind: data.wind.speed,
              temp: data.main.temp,
              name: data.name,
              weather: data.weather[0].main,
              clouds: data.clouds.all,
              latitud: data.coord.lat,
              longitud: data.coord.lon
            }
            setCiudad(ciudad)
          } else {
            alert("Ciudad no valida")
          }
        })
      }
    return (
        <Bakground>
            <ContainerMax>
              <ContainerDetail>
                <Nav>
                  <Btn to='/'><IoHome/></Btn>
                  <Link to='/info' style={{textDecoration: "none"}}><h3>ClimApp</h3></Link>
                </Nav>
                <Detalle>
                  <H2>Vista de detalle 👀</H2>
                  <CardDetail
                    longitud={ciudad.longitud}
                    latitud={ciudad.latitud} 
                    weather={ciudad.weather}
                    name={ciudad.name} 
                    min={ciudad.min} 
                    max={ciudad.max} 
                    img={ciudad.img}  
                    />
                </Detalle>
              </ContainerDetail>
              
            </ContainerMax>
        </Bakground>
    )
}

export default CardId
