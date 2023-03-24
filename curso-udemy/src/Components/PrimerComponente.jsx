// componente de clase
//se importa el componente desde react este no viene con ccc

import React,{Component} from "react";

class PrimerComponente extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    
    render() { 
        return ( <>
            <h1>Hola mundo desde el primer componente</h1>
        </> );
    }
}
 
export default PrimerComponente;