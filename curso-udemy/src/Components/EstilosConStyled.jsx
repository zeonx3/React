import React,{Component} from "react";
import styled,{keyframes} from 'styled-components'
import './Variables.css'
class EstilosConStyled extends Component {
    constructor(props) {
        super(props);
    }



    render() { 

        const animaTexto=keyframes`

            from{
                color:white;
            }
            to{
                color:blue;
            }
        `

        const fondoTexto={
            color:'orange',
            
        }

        const Titulo = styled.h1`
            color: green;
            font-size:29px;
            background-color:${fondoTexto.color};
            &:hover{
                color: white;
                background-color: red;
            }

            @media(min-width:1000px)
            {
                color:transparent
            }

            animation:${animaTexto} 2s linear infinite;

        `

        

        const Cabecera = styled.header`
            height:var(--altoHeader);
            background-color:var(--colorHeader);
            width:var(--anchoHeader);


        `
       
        return ( 
            <>
            <Cabecera>
                <Titulo>
                    Estamos en StyledComponents
                </Titulo>
            </Cabecera>
            </>
         );
    }
}
 
export default EstilosConStyled;