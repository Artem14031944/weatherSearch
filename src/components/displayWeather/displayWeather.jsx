import React from 'react'
import { Button } from 'react-bootstrap'
import './styleDis.css'

const DisplayWeather = props =>  {
 const {data} = props;


 const Northerly = '\u21D1',
       NorthWesterly = '\u21D6',
       Westerly = '\u21D0',
       SouthWesterly = '\u21D9',
       Southerly = '\u21D3',
       SouthEasterly = '\u21D8',
       Easterly = '\u21D2',
       NorthEasterly = '\u21D7'

 const iconsUrl = 'http://openweathermap.org/img/wn/' + `${data.cod != 404 ? data.weather[0].icon : null}` + '.png';


 const deg = data.wind.deg;

  function toTextualDescription(deg){
    if(deg > 337.5) return Northerly + ' C'
    if(deg > 292.5) return NorthWesterly + ' СЗ'
    if(deg > 247.5) return Westerly + ' З'
    if(deg > 202.5) return SouthWesterly + ' ЮЗ'
    if(deg > 157.5) return Southerly + ' Ю'
    if(deg > 122.5) return SouthEasterly + ' ЮВ'
    if(deg > 67.5) return Easterly + ' В'
    if(deg > 22.5) return NorthEasterly + ' СВ'
    return Northerly + ''
  }

  
  return (
    <div className="displayWeather">

      { 
        data.cod != 404 ?

         <React.Fragment>
            <div className="mainCard">
              <p>Город: {data.name}</p>
              <p>Температура: {Math.floor(data.main.temp - 273.15)} &deg;C<img src={iconsUrl} className="weatherIcon" /> </p>
              <p>Влажность: {data.main.humidity}%</p>
              <p>Атмосферное давление: {data.main.pressure} </p>
              <p>Сила и напрвление ветра: {data.wind.speed} М/С - {toTextualDescription(deg)}</p>
              <p>Последние обновление даты: {new Date().toLocaleString()} </p>
                <div className="block-button">
                  <Button 
                    className="delete"
                    variant="danger"
                    style={{padding:'0px'}}
                  >
                      Удалить
                  </Button>
                  <Button 
                    className="upDate"
                    variant="success"
                    style={{padding:'0px'}}
                    onClick={()=> window.location.reload()}
                  >
                      Обновить
                  </Button>
               </div>    
             </div>
            </React.Fragment> 

        : <div className ="message" >
            <h2>{data.message}</h2>
        </div>
      }

    </div>
  )
}

export default DisplayWeather






