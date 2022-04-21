import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {

  const name = "กรุงเทพมหานคร"
  const apikey = "8986b7c6569d6571180b0327d6c34c0e"
  const [city,setCity] = useState({})

  useEffect(()=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCity(data)
    })
  },[])

  const converttemp=(k)=>{
    return (k-273).toFixed()
  }

  return (
    <div className="App">
      <section>
        <div className="location">
          <h1 className="city">{city.name}</h1>
          <p className="state">{city.sys.country}</p>
        </div>
        <div className="card">
          <div className="weather">
            <h1>{converttemp(city.main.temp)}&deg;C</h1>
            <small>สูงสุด : {converttemp(city.main.temp_max)}&deg;C, min : {converttemp(city.main.temp_min)}&deg;C</small>
          </div>
          <div className="info">
            <div className="status">{city.weather[0].main}</div>
            <div className="numidity">ความชื้น : {city.main.humidity}</div>
            <div className="wind">ความเร็วลม : {city.wind.speed}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
