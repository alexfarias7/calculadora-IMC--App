import React from 'react'
export default function Peso(props){
    return(
        <div>
        <labe>
          Peso
          <input type='text' value={props.peso} onChange={(e)=>{props.setpeso(e.target.value)}}/>
        </labe>
        </div>
    )
}
