import {useState} from 'react'


const Counter = () => {
const [contador,setContador]=useState(0)
    const suma=() => {
        setContador( contador + 1)
    }
    const resta=() => {
        setContador ( contador - 1)
    }
  return (
      <>
        <div>Carrito</div>
        <h2>{contador}</h2>
        <button className="boton" disabled={contador>9} onClick={suma}>+</button>
        <button className="boton" disabled={contador <= 0}  onClick={resta}>-</button>
        <button>Agregar al carrito </button>
      </>
    

  )
}

export default Counter