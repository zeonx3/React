import React,{useContext} from "react";
import { UserContext } from "./Context/UserContext";

export const ListaUsuarios = () => {
  
    const{users}=useContext(UserContext)
    
    const usuarios = users.data
    return (
    <>
        {<ul>
            {usuarios.map(usuario=>(
                <li key={usuario.id}>
                    {usuario.id}<br/>
                    {usuario.name}<br/>
                    {usuario.username}<br/>
                </li>
            ))}
        </ul>}
    </>
  )
}
