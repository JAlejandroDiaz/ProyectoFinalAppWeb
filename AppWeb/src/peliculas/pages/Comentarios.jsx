import React from 'react'

export const Comentarios = ({
  url,
  decripcion,
  nombreUsuario,
  fechaComemt

}) => {
 
  return (
    <div className=" mx-2 my-2  ">
    <div className="card text-center bg-dark text-light ">
      <div className="card-header">
        {nombreUsuario}
      </div>
      <div className="card-body">
        <h5 className="card-title">{decripcion}</h5>

        <a href={url} className="btn btn-primary">seguir vínculo</a>
      </div>
      <div className="card-footer text-body-secondary">
        <p className='text-light' >
        {fechaComemt.toDate().toLocaleString()}
        </p>
      </div>
    </div>
    </div>
  )
}
