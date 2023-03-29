import React,{Fragment, useState} from 'react';
import logo from './logo.svg';
import './App.css';
/* import { Padre } from './Rutas/Padre'; */
/* import { Axios } from './Components/Axios'; */
/* import { Fetch } from './Components/Fetch'; */
/* import { ComunicacionEntreComponentes1 } from './Components/ComunicacionEntreComponentes1'; */
/* import { ComunicacionEntreComponentes2 } from './Components/ComunicacionEntreComponentes2'; */
/* import { Padre } from './Components/IterandoComponentes/Padre'; */
/* import { IterarKeys } from './Components/IterarKeys'; */
/* import { IterandoArraysYArraysObjetos } from './Components/IterandoArraysYArraysObjetos'; */
/* import { SpreadOperator } from './Components/SpreadOperator'; */
/* import { RenderizadoCondicional } from './Components/RenderizadoCondicional';
 *//* import { Eventos } from './Components/Eventos'; */
/* import { Formularios } from './Components/Formularios'; */
/* import { Hooks } from './Components/Hooks'; */
/* import { Refs } from './Components/Refs'; */
/* import EstilosConStyled from './Components/EstilosConStyled.jsx'; */
/* import EstilosEnModulos from './Components/EstilosEnModulos/'; */
/* import EstilosEnLinea from './Components/EstilosEnLinea'; */
/* import PrimerComponente from './Components/PrimerComponente'; */
/* import Props from './Components/Props'; */
/* import State from './Components/State'; */
/* import EstilosTradicionales from './Components/EstilosTradicionales'; */
/* import { useCount } from './Components/hooks/useCount'; */
/* import UserProvider from './Components/Context/UserContext';
import { ListaUsuarios } from './Components/ListaUsuarios'; */
import {Provider} from 'react-redux';
import store from './Redux/store';
import Contador from './Components/Contador.jsx';

function App() {

 /*  const lista = ['peras ','manzanas ','naranjas '] */

/*  const [estado,setEstado] = useState(false)
 const estadoComponente=()=>{
  setEstado(true)
 } */

/*  const hijoLlamaPadre=()=>{
  console.log('llamando al padre desde el hijo')
} */

/* const llamandoAHermano=()=>{
  setEstado(false)
} */
 /*  const[contador]=useCount(0) */
  return (
    <>    
      {/*  <PrimerComponente/> */}
      {/* <Props frutas = {lista}/> */}
      {/*  <State/> */}
      {/*  <EstilosTradicionales/> */}
      {/*  <EstilosEnLinea/> */}
      {/* <EstilosEnModulos/> */}
      {/* <EstilosConStyled/> */}
      {/*  <Refs/> */}
      {/* <Hooks/> */}
      {/* <Formularios/> */}
      {/*  <Eventos/> */}
      {/* <RenderizadoCondicional/> */}
      {/* <SpreadOperator/> */}
      {/* <IterandoArraysYArraysObjetos/> */}
      {/* <IterarKeys/> */}
      {/* <Padre/> */}
      {/* <ComunicacionEntreComponentes1 llamaHermano2={llamandoAHermano} llamaPadre={hijoLlamaPadre} cambioEstado={estado}/> */}
      {/* <ComunicacionEntreComponentes2 nuevoEstado={estado}/> */}
      {/* <Fetch/> */}
      {/* <Axios/> */}
      {/* <button onClick={estadoComponente}>Pulsa</button> */}
      {/* <Padre/> */}
       {/* <h1>{contador}</h1> */}
       {/* <UserProvider>
        <ListaUsuarios/>
        </UserProvider> */}
        <Provider store={store}>
          <Contador/>
        </Provider>
    </>
    
  );
}

export default App;
