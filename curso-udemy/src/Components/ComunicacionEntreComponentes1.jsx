import React from 'react'

export const ComunicacionEntreComponentes1 = (props) => {

    if(props.cambioEstado === true)
    {
        alert('el estado es verdadero')
    }

    const llama=()=>{
        props.llamaPadre()
    }

    const llamaHermano=()=>{
        props.llamaHermano2()
    }

    
  return (
   <>
    <button onClick={llama}>Llama Padre</button>
    <button onClick={llamaHermano}>Llama Hermano</button>
   </>
  )
}
