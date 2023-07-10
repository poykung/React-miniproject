import React from 'react'

function Dropdown({changeFoodData}) {

  return (
    <nav>
        <h2>Dynamic Dropdown</h2>
        <select className="menu" onChange={changeFoodData}>
            <option value="all-menu">All Menu</option>
            <option value="fried">Fried</option>
            <option value="soup-stew">Soup-Stew</option>
            <option value="beverage">Beverage (tea coffe milk)</option>
            <option value="steak">Steak</option>
        </select>
    </nav>
  )
}

export default Dropdown