import React,{useState, useEffect} from 'react'
import Card from '../../components/Card/Card';

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
        <div>
            
            <Card
                key={ciudad.id} 
                name={ciudad.name} 
                min={ciudad.min} 
                max={ciudad.max} 
                img={ciudad.img}  
                id={ciudad.id}
                />
        </div>
    )
}

export default CardId
