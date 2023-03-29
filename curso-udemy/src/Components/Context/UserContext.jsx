import { createContext,useState,useEffect } from "react";
import axios from "axios";

//Creat Context
export const UserContext=createContext()

//Crear el provider

const UserProvider=(props)=>{

    //Crear state del context

    const[users,setUsers]=useState([])
    //ejecutar api

    useEffect(()=>{

        const obtUser = async()=>{
            const url = 'https://jsonplaceholder.typicode.com/users'
            const usuarios = await axios(url)
            setUsers(usuarios)
        }
        obtUser()

    },[])

    return(

        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>

    )
}

export default UserProvider
