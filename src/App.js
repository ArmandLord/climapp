import React, {useState} from 'react'
import { Cards, SearchBar, ContainerMex } from './components'
import { Bakground, ContainerMax, ContainerMin, ContainerMin2 } from './global.style'


function App() {
  const [ciudades, setCiudades] = useState([])
  
  function onSearch(ciudad){
    const apiKey = "6448b47234025fbd1d4f4777e67eaa18"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(re => re.json())
    .then(data => {
      let yaexiste = ciudades.some(city => 
        city.id
         === 
        data.id
        )
                if(yaexiste){
                  alert ("Ciudad en pantalla")
                }

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
        setCiudades(ciudadPasada => [...ciudadPasada, ciudad])
      } else {
        alert("Ciudad no valida")
      }
    })
    
  }
  
  function onClose(idCiudad){
    setCiudades(ciudadPasada => ciudadPasada.filter(el => el.id !== idCiudad))
  }
  
  return (
    <Bakground>
      <ContainerMax>
        <ContainerMin>
          <ContainerMex/>
        </ContainerMin>
        <ContainerMin2>
          <SearchBar onSearch={onSearch} />
          <Cards ciudades={ciudades} onClose={onClose}/>
        </ContainerMin2>
      </ContainerMax> 
    </Bakground>
  );
}

export default App;
