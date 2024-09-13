import React from 'react'

export const SegundoComponente = () => {
    let nombre = 'Carlos';
    let web = 'http://telainc.com'

    let usuario ={
        nombre :"carlitos",
        apellido: "delacruzito",
        edad:23,
        ciudad: "Alvaro"
    };
    console.log(usuario);
  return (
   <div>
    <hr/>
    <h2>Datos del usuario</h2>
    <ul>
        <li>nombre: {nombre}</li>
        <li>Apellido:{web}</li>
    </ul>
    <hr/>
    <h2>Datos de un objeto</h2>
    <ul>
        <li>nombre: {usuario.nombre}</li>
        <li>Apellido: {usuario.apellido}</li>
        <li>Edad: {usuario.edad}</li>
        <li>ciudad: {usuario.ciudad}</li>
    </ul>
   </div>
  )
}

export default SegundoComponente;