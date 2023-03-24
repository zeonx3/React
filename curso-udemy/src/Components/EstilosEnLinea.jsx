import React,{Component} from "react";


class EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }


    render() {
        let age = 39
        const titulo = {
            textAlign:'center',
            color:'white',
            backgroundColor: age>= 37 ? 'black' : 'red'
        }
        return (
            <>
            <h1 style={titulo} >Titulazo</h1>    
            </>
          );
    }
}
 
export default EstilosEnLinea;