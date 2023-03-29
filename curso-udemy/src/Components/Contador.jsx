import {connect} from 'react-redux'
import {increment,decrement } from '../Redux/Actions/CounterActions'


const Contador=({increment,decrement,counter})=>{

    return
    <>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Restar</button>
        <h1>{counter}</h1>
    </>

}

const mapStateToProps = (state)=>{
    return{
        counter:state.contador
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Contador)