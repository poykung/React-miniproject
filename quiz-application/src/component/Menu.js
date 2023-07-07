import { useContext } from "react"
import { DataContext } from "../App"

const Menu =()=>{
    const {setappState} = useContext(DataContext)
    return (
        <div className="menu">
            <h1>Example : </h1>
            <button className="btn" onClick={()=>setappState('quiz')}>Start...</button>
        </div>
    )
}

export default Menu