import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './atributo.css'
const Atributos = ({personajes}) => {
    const [personaje,setPersonaje]=useState({})
    useEffect(()=>{
        axios.get(personajes)
        .then((res)=>setPersonaje(res.data))
    },[personajes])
    
    return (
        <div className='total_info' >
            
            <img src={personaje.image} alt="" />
            <div className="inf">
            <div className={`App${personaje.status}`}></div>
            <h3>status: {personaje.status}</h3>
            <h3>name: {personaje.name}</h3>
            <h3>spacies: {personaje.species}</h3>
            
            </div>
           
        </div>
    );
};

export default Atributos;