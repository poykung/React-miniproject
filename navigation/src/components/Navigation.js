import {Link} from 'react-router-dom' //กำหนด normal like
import { GoListUnordered} from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import './Navigation.css'
import MenuData from '../pages/MenuData';



const Navigation = ()=>{
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu =  ()=> setShowMenu(!showMenu)
    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menu-bar"><GoListUnordered onClick={toggleMenu}/></Link>
                </div>
            </div>
            <nav className={showMenu ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-item" onClick={toggleMenu}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bar"><IoMdClose onClick={toggleMenu}/></Link>
                    </li>
       
                    {MenuData.map((menu,index)=>{
                        return(
                            <li className="menu-text" key={index}>
                            <Link to={menu.path}><span>{menu.icon} {menu.title}</span></Link>
                            </li>
                        )
                    })}
                  
                </ul>
            </nav>
        </aside>
        
    )
}

export default Navigation