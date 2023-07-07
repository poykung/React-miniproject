import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Score =()=>{
    const {score,setappState,setScore} = useContext(DataContext)

    const restartApp= ()=>{
        setScore(0)
        setappState('menu')
        
    }
    return (
        <div className="score">
            <h1>Score Summary</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>Run the tests again!</button>
        </div>
    )
}

export default Score