import React from 'react'

export const TercerComponente = ({nombre, apellido, ficha}) => {
  
    const libros= ["LOTR", "READY PLAYER ONE", "THE THING"];
  return (
    <div>
      <h2>Mis Libros</h2>
      <ul>
        <li>{libros[0]}</li>
        <li>{libros[1]}</li>
        <li>{libros[2]}</li>
      </ul>
      <hr/>
      <h3>Libros leidos</h3>
      <ul>
        {
            libros.map((libro, indice)=>{
            return <li key={indice}>{libro}</li>
            })
        }
      </ul>
        <hr/>
        <h2> Ficha medica</h2>
        <ul> 
          <li><strong>Nombre: </strong>{nombre}</li>
          <li><strong>Apellidos: </strong>{apellido}</li>
          <li><strong>Alergias: </strong>{ficha.alergias}</li>
          <li><strong>grupo sanguineo: </strong>{ficha.grupoSangre}</li>
          <li><strong>Estado de salud: </strong>{ficha.estadoSalud}</li>
          <li><strong>Altura: </strong>{ficha.altura}</li>

          tabnine
        </ul>
    </div>
  )
}

export default TercerComponente;


