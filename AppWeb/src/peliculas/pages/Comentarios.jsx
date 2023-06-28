import React from 'react'
import "./Style.css";
export const Comentarios = ({
  url,
  decripcion,
  nombreUsuario,
  fechaComemt

}) => {
 
  return (
    <div className=" mx-2 my-2  ">
    <div className="card text-center bg-dark text-white ">
      <div className="card-header ">
        {nombreUsuario}
      </div>
      <div className="card-body ">
        <h5 className="card-title   ">{decripcion}</h5>

        <a href={url} className="btn btn-primary  ">seguir vínculo</a>
      </div>
      <div className="card-footer text-body-secondary  ">
        {fechaComemt.toDate().toLocaleString()}
      </div>
    </div>
    </div>
  )
}
