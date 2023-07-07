import Menu from './component/Menu'
import Quiz from './component/Quiz'
import Score from './component/Score'
import {useState , createContext} from 'react'
import './App.css'

export const DataContext = createContext()

function App (){
  const [appState,setappState] = useState('menu')
  const [score,setScore] = useState(0)
  return(
    <DataContext.Provider value={{appState,setappState,score,setScore}}>
      <div className="App">
      <h1>React Quiz Application</h1>
      {appState==='menu' && <Menu/>}
      {appState==='quiz' && <Quiz/>}
      {appState==='score' && <Score/>}
      </div>
    </DataContext.Provider>
  )
}

export default App