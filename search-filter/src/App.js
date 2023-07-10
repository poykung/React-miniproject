import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [keyword,setKeyword] = useState('')
  const [dataFilter] = useState(["name","capital"])


  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const searchCountries=(countries)=>{
    return countries.filter((item)=>{
        return dataFilter.some((filter)=>{
            if(item[filter]){//check ค่าว่าง
              return item[filter].toString().toLowerCase().indexOf(keyword.toLowerCase())>-1
            }
        })

    })
  }
  return (
    <div className="container">
      <div className="search-container"> 
        <label htmlFor="search-form">
          <input type="text" className="search-input" 
          placeholder="search data with name or capital...."
          value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
        </label>
      </div>
    <ul className="row">
      {searchCountries(countries).map((item, index) => (
        <li key={index}>
          <div className="card">
            <div className="card-title">
              <img src={item.flags.svg} alt={item.name.common} />
            </div>
            <div className="card-body">
              <div className="card-description">
                <h2>{item.name.common}</h2>
                <ol className="card-list">
                  <li>Population: <span>{formatNumber(item.population)}</span></li>
                  <li>Region: <span>{item.region}</span></li>
                  <li>Capital: <span>{item.capital}</span></li>
                </ol>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
