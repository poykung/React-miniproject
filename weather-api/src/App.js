import './App.css'
import {useEffect, useState} from 'react'

function App() {
  const name = "Sydney"
  const apiKey="d002a37bce923dce0d362e2f71de6b78"
  const [city,setCity] = useState({})
  const [isLoading,setIsLoading] = useState(false) //รอดึงข้อมูลจาก api
  

  useEffect(()=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url).then(res=>res.json())
    .then(data=>{
      setCity(data)
      setIsLoading(true)
      
    })
  },[])

  const convertTemp = (k)=>{
    return (k-273).toFixed()
  }

  //ดักเงื่อนไขให้ state isLoading เป็น true ถึงจะแสดงผล
  return (
    (isLoading && <div className="App"> 
    <section>
      <div className="location">
          <h1 className="city">{city.name}</h1>
          <p className="state">{city.sys.country}</p>
      </div>

      <div className="card">
        <div className="weather">
          <h1>{convertTemp(city.main.temp)}&deg;C</h1>
          <small>MAX : {convertTemp(city.main.temp_max)}&deg;C   MIN : {convertTemp(city.main.temp_min) }&deg;C</small>
        </div>

        <div className="info">
          <div className="status">{city.weather[0].main}</div>
          <div className="humidiy">Humidiy : {city.main.humidity}</div>
          <div className="wind">Wind speed : {city.wind.speed}</div>
        </div>

      </div>
    </section>
  </div>)
  );
}

export default App;
