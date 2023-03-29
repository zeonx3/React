import React from 'react'

export const IterarKeys = () => {

    const animal={
        nombre:'coco',
        especie:'delfin',
        edad:5,
        acuario:'valencia',
        adiestrador:'marcelo'
    }

    const key=Object.keys(animal)






  return (
    <>
    <ul>
        {key.map(k=>(
            <li>{k}: {animal[k]}</li>
        ))}
    </ul>
    
    </>
  )
}
