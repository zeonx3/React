import React from 'react'
import { Componente1 } from './Componente1.jsx'
import { Componente2 } from './Componente2'
import { Componente3 } from './Componente3'
import { RutasDinamicas } from './RutasDinamicas'
import {BrowserRouter,Route,Routes,Link,Switch,NavLink} from  'react-router-dom'
import './Padre.css'
export const Padre = () => {

  return (

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Componente1/>}></Route>
            <Route path="/pagina2" element={<Componente2/>}></Route>
            <Route path="/pagina3" element={<Componente3/>}></Route>
            <Route path="/pagina4" element={<h2>Componente 4</h2>}></Route>
            <Route path='/users/:id' element={<RutasDinamicas/>}></Route>
          </Routes>
          <NavLink activeStyle={{color:'green'}} to="/pagina2">A componte 2</NavLink><br />
          <NavLink activeClassName="estiloLink" to="/pagina3">A componte 3</NavLink>
        
        </BrowserRouter>
   
  )
}
