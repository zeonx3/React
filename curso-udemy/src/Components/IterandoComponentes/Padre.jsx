import React from 'react'
import { Hijo } from './Hijo'

export const Padre = () => {

    const nombres = ['Luis','Carlos','Jorge']


  return (
   <>
    <ul>
        {nombres.map(nombre=>(
            <Hijo nombreLista={nombre}/>
        ))}
    </ul>

   </>
   )
}
