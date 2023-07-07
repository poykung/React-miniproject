import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"

const Quiz =()=>{
    const [curren,setCurren] = useState(0)
    const [select,setSelect] = useState('')
    const {score,setScore,setappState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
        // eslint-disable-next-line
    },[select])

    const checkAnswer=()=>{
        if(select !== '' ){
            if(select === QuestionsData[curren].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                console.log("Wrong!")
                nextQuestion()
            }
        }
    }

    const nextQuestion =()=>{
        setSelect("")
        if(curren === QuestionsData.length -1){
            setappState('score')
        }else{
            setCurren(curren+1)
        }
    }

    return (
        <div className="quiz">
            <h1>{QuestionsData[curren].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelect("A")}>{QuestionsData[curren].A}</button>
                <button onClick={()=>setSelect("B")}>{QuestionsData[curren].B}</button>
                <button onClick={()=>setSelect("C")}>{QuestionsData[curren].C}</button>
                <button onClick={()=>setSelect("D")}>{QuestionsData[curren].D}</button>
            </div>
            <p>{`${curren+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz