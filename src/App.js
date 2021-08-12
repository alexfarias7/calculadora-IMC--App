import React , {useState} from 'react'
import TabelaIMC from './components/Tabelaimc'
import Peso from './components/Peso'
import Altura from './components/Altura'
import CalcularIMC from './components/CalcularImc'
import ResultadoIMC from './components/ResultadoIMC'






export default function App(){

  const [pesoimc, setPesoimc] = useState(0)
  const [alturaimc, setAlturaimc] = useState(0)
  const [resultadoimc, setResultado] = useState(0)
  const [MensagemIMC,SetMensagem]= useState()

  return(

  <>
   <Peso peso={pesoimc} setpeso={setPesoimc}/>
   <Altura altura={alturaimc} setaltura={setAlturaimc}/>
   <CalcularIMC peso={pesoimc} altura={alturaimc} setresultado={setResultado}/>


  <TabelaIMC/>

  </>
  )

}

