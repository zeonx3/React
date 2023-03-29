import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Axios = () => {

    const[users,setUsers]=useState([])
    
    useEffect(()=>{

        const cargarUsuarios =async()=>{
            const res=await axios('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }

        cargarUsuarios()

    },[])

  return (
   <>
    <ul>
        {users.map(user =>(
            <li key={user.id}>
                Nombre: {user.name} <br />
                username: {user.username } <br />
            </li>
        ))}
    </ul>
   </> 
  )
}
