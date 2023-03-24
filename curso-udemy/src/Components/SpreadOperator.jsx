import React from 'react'

export const SpreadOperator = () => {

    const animalesSalvajes=['ciervos','lobos','jabalis']
    const animalesDomesticos=['perros','gatos','hamster']

    const animales=[...animalesSalvajes , ...animalesDomesticos]

    const modelosEuropeas={
        alemania:'diana',
        francia:'cristine',
        españa:'carmen'
    }
    const modelosAfrica={
        senegal:'sonia',
        sudafrica:'carmele',
        sudan:'sandra'
    }

    const modelos={...modelosEuropeas,...modelosAfrica}
    

    console.log(modelos)
  return (
    <>
    
    </>
  )
}
