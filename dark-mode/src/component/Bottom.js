import { useContext } from 'react'
import { ThemeContext } from '../App'

const Footer = ()=>{
    const {theme} = useContext(ThemeContext)
    return(
        <footer className={theme === 'dark' ? 'dark' : 'light'}>
        </footer>
    )
}

export default Footer