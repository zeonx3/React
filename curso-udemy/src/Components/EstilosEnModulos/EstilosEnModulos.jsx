import React,{Component} from "react";
import styles from './EstilosEnModulos.module.css'
class EstilosEnModulos extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <>
            <h1 className={styles.h1}>Estilos en modulos</h1>
            </>
          );
    }
}
 
export default EstilosEnModulos;