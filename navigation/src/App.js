import Navigation from "./components/Navigation";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"; 
//เรียกใช้ BrowserRouter ในการ link as Router เป็นการตั้งชื่อ

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'
function App() {
  
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
