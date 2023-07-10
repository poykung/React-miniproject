import React, { useEffect, useState } from 'react'
import Photo from './components/Photo'
import './App.css'

function App() {
  const apiKey = `GoV9asOJf1D697ljH-9HcqGvm1_ya2dBqQobC31IJss`
  const [photos,setPhotos] = useState([])
  const [pages,setPages] = useState(1)
  const [isLoading,setIsLoading] = useState(false)

  const fetchImage = async ()=>{
    setIsLoading(true)
    try{
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${pages}`
      const response = await fetch(apiUrl)
      const data = await response.json()
      setPhotos((oldData)=>{
        return [...oldData,...data]
      })
    }catch(err){
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchImage()
    // eslint-disable-next-line
  },[pages])

  useEffect(()=>{
   const event = window.addEventListener('scroll',()=>{
      if(window.innerHeight+window.scrollY>document.body.offsetHeight-500 && !isLoading){
        setPages((oldPage)=>{
          return oldPage+1
        })
      }
    })
    return window.removeEventListener('scroll',event)
    // eslint-disable-next-line
  },[])

  return (
    <main>
       <h1>Infinite Scroll Photo | Unsplash(API)</h1>
      <section className="photos">
        <div className="display-photo">
          {photos.map((data,index)=>{
            return <Photo key={index} {...data}/>
          })}
        </div>
      </section>
    </main>
  )
}

export default App