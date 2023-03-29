import React, { useEffect, useState } from 'react'

export const Fetch = () => {
  
    const [users,setUsers]=useState([])
  

    useEffect(()=>{

        const cargarUsuarios=async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data=await res.json()
            setUsers(data)
            console.log(data)
        }
        cargarUsuarios()},[])

    return (
    <>
    <ul>
        {users.map(user =>(
            <li key={user.id}>
                nombres: {user.name}
                <br />
                username: {user.username}
                </li>
        ))}
    </ul>
    </>
  )
}
