import React from 'react'
export default function ResultadoIMC(props){
    return(
        <div>
        <p>Resultado: {props.res.toFixed(2)}
        </p>
       
      </div>
    )
}