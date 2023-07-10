import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import FoodComponent from './components/FoodComponent';
import MenuData from './data/MenuData';

function App() {
  const [food,setFood] = useState(MenuData)

  const changeFoodData = (ele)=>{
    const category = ele.target.value
    if(category === "all-menu"){
      setFood(MenuData)
    }else{
      const result = MenuData.filter((element)=>{
        return element.menu === category
      })
      setFood(result)
    }
  }

  return (
  <div className="container">
    <Dropdown changeFoodData={changeFoodData}/>
    <div className="content">
      {food.map((data,index)=>{
        return <FoodComponent key={index} {...data}/>
      })}
    </div>

  </div>
  );
}

export default App;
