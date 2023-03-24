import React,{Component} from "react";

class State extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'antonio',
            apellidos:'cortes'
        }
    }

    cambiarDatos(){

        if(this.state.name === 'antonio' && this.state.apellidos === 'cortes')
        {
            this.setState({name:'Lalo',apellidos:'Landa'})

        }
        else
        {
            this.setState({name:'antonio',apellidos:'cortes'})
        }
    }


    render() { 
        return (  
            <>
            <h2>Mi nombre es {this.state.name} {this.state.apellidos}</h2>
            <button onClick={this.cambiarDatos.bind(this)}>Cambiar</button>
            </>
        );
    }
}
 
export default State;