import React from 'react'

export const IterandoArraysYArraysObjetos = () => {

    const animales=['pato','loro','gato','conejo']
    const personas=[
        {
            id:0,
            nombre:'maria',
            puesto:'limpiadora'
        },
        {
            id:1,
            nombre:'catalina',
            puesto:'cocinera'
        },
        {
            id:2,
            nombre:'julian',
            puesto:'concerje'
        },
        {
            id:3,
            nombre:'rodolfo',
            puesto:'bar'
        }
    ]



  return (
    <>
        <ul>
            {animales.map(animal=>(
                <li>{animal}</li>
            ))}    
        </ul>

        <ul>
            {personas.map(persona=>(
                <li key={persona.id}>
                    id: {persona.id}<br/>
                    nombre: {persona.nombre}<br/>
                    puesto: {persona.puesto}<br/>
                    <br/>
                </li>
            ))}
        </ul>
    </>
  )
}
