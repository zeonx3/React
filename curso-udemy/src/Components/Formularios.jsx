import React, { useState } from 'react'

export const Formularios = () => {

    const[nombre,setNombre]=useState(false)
    const[apellido,setApellido]=useState(false)
    const[correo,setCorreo]=useState(false)
    const[password,setPassword]=useState(false)

    const nombreRegex=/^[a-zA-Z]{3,16}$/
    const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
    const apellidoRegex=/^[a-zA-Z]{3,16}$/
    const passwordRegex=/^[a-z0-9_-]{6,18}$/   

    const valorNombre=(nombreV)=>{
        if(nombreV.trim()){
            if(nombreRegex.test(nombreV)){
                setNombre(true)
            }
        }
    }
    const valorApellido=(apellidoV)=>{
        if(apellidoV.trim()){
            if(apellidoRegex.test(apellidoV)){
                setApellido(true)
            }
        }
    }
    const valorCorreo=(correoV)=>{
        if(correoV.trim()){
            if(emailRegex.test(correoV)){
                setCorreo(true)
            }
        }
    }
    const valorPassword=(passwordV)=>{
        if(passwordV.trim()){
            if(passwordRegex.test(passwordV)){
                setPassword(true)
            }
        }
    }

    const enviar=(e)=>{
        e.preventDefault()

        if(nombre===true && apellido === true && correo=== true && password === true)
        {
            console.log('datos validos')
        }else{
            console.log('datos no validos')
        }
        setTimeout(() => {
            window.location.reload()
        }, 5000);
        
    }

  return (
   <>
        <form onSubmit={e=>enviar(e)}>
            <h3>Nombre</h3>
            <input type="text" onChange={e=>valorNombre(e.target.value)}></input>
            <h3>Apellido</h3>
            <input type="text" onChange={e=>valorApellido(e.target.value)}></input>
            <h3>Correo</h3>
            <input type="mail" onChange={e=>valorCorreo(e.target.value)}></input>
            <h3>Contraseña</h3>
            <input type="password" onChange={e=>valorPassword(e.target.value)}></input>
            <br/>
            <input type="submit" >
            </input>
        </form>
   </>
  )
}
