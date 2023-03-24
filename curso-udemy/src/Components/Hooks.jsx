import React,{useState,useEffect} from 'react'

export const Hooks = () => {

    const[color,setColor]=useState('green')
    const[contador,setContador]=useState(0)
    const fondo={
        width: '100%',
        height: '1000px',
        backgroundColor: color
    }

    const cambioColor=()=>{

        if(color==='green')
        setColor('cyan')
        if(color==='cyan')
        setColor('green')
    }

    useEffect(()=>{

        let intervalo=setInterval(()=>{setContador(contador+1)},1000)

        return()=>{
            clearInterval(intervalo)
        }
    },[contador])

  return (
    <>
    <div style={fondo} className="container">
    <button onClick={cambioColor}>Cambio</button>
    <h1>Contador {contador}</h1>
    </div>


    </>
  )
}
