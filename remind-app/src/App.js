import './App.css'
import {useState} from 'react'
import uuid from 'react-uuid';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [namelist,setNameList] = useState('')
  const [list,setList] = useState([])

  const [alert,setAlert] = useState({show:false,msg:'',type:''})
  const [checkEditItem,setCheckEditItem] = useState(false)
  const [editId,setEditId] = useState(null)

  const submitData=(e)=>{
    e.preventDefault()
    if(!namelist){
      setAlert({show:true,msg:'please enter a data...',type:'error'})
    }else if(checkEditItem && namelist){
      const result = list.map((item)=>{
        if(item.id === editId){
          return {...item,title:namelist}
        }
        return item
      })
      setList(result)
      setNameList('')
      setCheckEditItem(false)
      setEditId(null)
      setAlert({show:true,msg:'edit data success...',type:'success'})
    }else{
      const newItem = {
        id:uuid(),
        title:namelist
      }
      setList([...list,newItem])
      setNameList('')
      setAlert({show:true,msg:'save data success...',type:'success'})
    }
  }

  const removeItem=(id)=>{
    const result = list.filter((item)=>item.id !== id)
    setList(result)
    setAlert({show:true,msg:'delete data success...',type:'error'})
  }

  const editItem=(id)=>{
    setCheckEditItem(true)
    setEditId(id)
    const searchItem = list.find((item)=>item.id === id)
    setNameList(searchItem.title)
  }

  return (
    <section className="container">
      <h1>Remind-App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control"> 
          <input type="text" className="text-input" placeholder="please enter a list... " 
          onChange={(e)=>setNameList(e.target.value)} value={namelist}
          ></input>
         <button type="submit" className="btn-submit">
          {checkEditItem ? "Edit" : "Add list"}
         </button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data,index)=>{
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem}/>
        })}
      </section>
    </section>
  );
}

export default App;
