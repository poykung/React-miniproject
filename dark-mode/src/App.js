import './App.css';
import Title from './component/Title';
import Content from './component/Content';
import { createContext, useState } from 'react';
import Footer from './component/Bottom';

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme]  = useState('light')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        <div>
          <Title/>
          <Content/>
          <Footer/>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
