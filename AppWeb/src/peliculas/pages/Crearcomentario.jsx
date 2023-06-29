import { useState } from "react"
import {db} from '../../firebase/firebase.confing'
import Swal from 'sweetalert2';

export const Crearcomentario = ({
  Usuario,
  NombrePelicula,
  selectMenu
}) => {

 const  [descripcion, setDescripcion] = useState("")
 const  [url, setUrl] = useState("")
 
 const guardarComentarios =()=>{
  var fechaComemt = new Date();

    db.collection("Comments").add({
        id_pel: NombrePelicula,
        nombreUsuario: Usuario,
        url: url,
        decripcion: descripcion,
        fechaComemt: fechaComemt
    })
        .then(function(docRef) {
            selectMenu(false)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Comentario Guardado ;)',
              showConfirmButton: false,
              timer: 1500
            })
        })
        .catch(function(error) {
            alert("Error, los datos no pudieron ser guardados: " + error.message);
        });

 }



  return (
    <>
    <form className="row g-3 mx-3 my-3">
      <div className="col-md-4">
        <label form="validationDefault01" className="form-label " style={{ color: "white" }}>Descripcion</label>
        <input type="text" className="form-control" id="validationDefault01"
         onChange={(event)=>{
            setDescripcion(event.target.value)
         }}
         placeholder="descripcion de lo que compartes" required />
      </div>
      <div className="col-md-4">
        <label form="validationDefault02" style={{ color: "white" }} className="form-label">URL</label>
        <input type="text" className="form-control" id="validationDefault02" 
        onChange={(event)=>{
              setUrl(event.target.value)
        }} 
        placeholder="Aquí va tu URL" required />
      </div>
      <div className="col-md-4">
      <label form="validationDefaultUsername" style={{ color: "white" }} className="form-label">Username</label>

        <div className="input-group">
          <span className="input-group-text" id="inputGroupPrepend2">{Usuario}</span>

        </div>
      </div>
      
    </form>
    <div className="col-12">
    <button className="btn btn-dark border-white"  onClick={guardarComentarios}>guardar comentario</button>

  </div>
  </>
  )
}
