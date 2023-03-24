import React,{createRef} from 'react'

export const Refs = () => {


    const cambioColor = createRef()

    const cambioColorTexto=()=>{
        cambioColor.current.style.color='red'
    }


  return (
    <>
        <h1 ref={cambioColor}>Titulo tornasol</h1>
        <button onClick={cambioColorTexto}>Cambio</button>
    </>
  )
}
