import React from 'react'
export default function Altura(props){
    return(
        <div>
        <labe>
          Altura
          <input type='text' value={props.altura} onChange={(e)=>{props.setaltura(e.target.value)}}/>
        </labe>
        </div>
    )
}
