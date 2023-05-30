import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import Atributos from './assets/componente/atributos'
import './personaje.css'

function App() {
  const [count, setCount]=useState({})
  const[id,setId]=useState("")
const ramdom=Math.floor(Math.random()*51)+1
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${ramdom}`)
    .then((res) => {setCount(res.data)})
    
  },[])
  
  const searchtype=(e)=>{
    e.preventDefault();
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
    .then((res) => {setCount(res.data)})
    clear()
  }
  const clear=()=>{
    setId("")
  }

  return (
    <div className="App">
      <div className="img"></div>
      <div className="busquedad-info">
        <div className="form">
          <form onSubmit={searchtype}>
        <input className='busqueda' type="number" 
        name='buscador'
        placeholder='escribe tu id' 
        required  
        value={id} 
        
        onChange={e=>setId(e.target.value)}/>
       <input className='search' type="submit" name='' value={'search'}/>
      </form>
        </div>
         <div className="contend-glob">
         
        <h2 className='Dimension'>DIMENSION: {count.dimension}</h2>
        <h2 className='Origin'>ORIGIN:{count.name}</h2>
        <h2 className='Type'>TYPE: {count.type}</h2>
      
         </div>
      
     
      </div>
      <div className="personaje">

      
        {
          count.residents?.map(personajes=>(
            
              <Atributos keys={personajes.url} personajes={personajes}/>
            
          ))
        }
      </div>
     
    </div>
  )
}

export default App
