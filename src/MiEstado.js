import React, { useState } from 'react'

export const MiEstado = () => {
    /* let nombre="Delacruz";
    
   const CambiarNombre= (e)=>{
        nombre= "Eduardo";*/

        const [nombre, setNombre]= useState("Delacruz");

        const CambiarNombre = (e, nombreFijo)=>{
          setNombre(nombreFijo);
    }

  return (
    <div>

    <h3>Componente: Mi Estado</h3>
    <p>Mi nombre es: <strong>{nombre}</strong></p>

    <button onClick={CambiarNombre}>Cambiar nombre</button>
    <input type='text' placeholder='Cambiar Nombre'
    onKeyUp={e => CambiarNombre(e, e.target.value)}/>

    </div>
  )
}

export default MiEstado