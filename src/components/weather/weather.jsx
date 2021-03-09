import React,{ useState } from 'react'
import DisplayWeather from '../displayWeather/displayWeather'
import { Button } from 'react-bootstrap'
import './style.css'


const Weather = () => {

  const APIKEY = 'bbc7070237e337f7a6b19116d8d8ba1b'

  const[form, setForm] = useState({
    city: ''
  })
  
  const[weather, setWeather] = useState([])


  async function getWeather(e) {
    e.preventDefault()
    if(form === 'city') {
      alert('Add values')
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}`
      ).then(res => res.json())
       .then(data => data)
      
       setWeather(
         {
           data : data
         }
       )
    }
  }

 
  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;

    if(name === 'city') {
      setForm({...form, city:value})
    }
   
  }

  return(
    <div className="container">
      <div className="header">
        <h1>Прогноз погоды</h1>
      </div>
        <div className="search">
          <form>
            <input 
              className="searchIn"
              type="search"
              placeholder="Поиск..."
              name="city" 
              onChange={(e) => handleChange(e)}
            />
            <span className="autoUpdate">Автообновление 5с</span>
            <input type="checkbox"
                   className="checkbox"
                   />
              <div className="click">
                <Button
                  className="btn"
                  style={{padding:'0px'}}
                  onClick={(e) => getWeather(e)}>
                  Добавить
                </Button>
              </div>
          </form>

          {
             weather.data != undefined ? 

              <div>
                <DisplayWeather 
                  data={weather.data}
                />
              </div>
            
             : null
          }
        </div>
    </div>
  )
}


export default Weather
