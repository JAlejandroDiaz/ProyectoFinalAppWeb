import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Axios from "axios";


export const Registar = () => {
    const [Nombre, setNombre] = useState("")
    const [Cedula, setCedula] = useState("")
    const [Apellido, setApellido] = useState("")
    const [Email, setEmail] = useState("")
    const [Contrasena, setContrasena] = useState("")

   const guardar = () =>{
    Axios.post("http://localhost:3001/Login",{
        Cedula: Cedula,
        Nombre: Nombre,
        Apellido: Apellido,
        Email: Email,
        Contrasena: Contrasena

    }).then(()=>{
        alert("registrado")
    })
   }

  return (
    <>
    <div className="container p-3">
        <div className="card text-center">
          <div className="card-header bg-danger">
            registrar personas
          </div>
          <div className="card-body">
          <div className="input-group mb-3">
              <span className="input-group-text bg-danger " id="basic-addon1">
                Cedula:{""}
              </span>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setCedula(event.target.value);
                }}
                value={Cedula || ""}
                placeholder="Ingrese su Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-danger " id="basic-addon1">
                nombre:{""}
              </span>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
                value={Nombre || ""}
                placeholder="Ingrese su Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-danger " id="basic-addon1">
                Apellido:{""}
              </span>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setApellido(event.target.value);
                }}
                value={Apellido || ""}
                placeholder="Ingrese su Apellido"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-danger " id="basic-addon1">
                Email:{""}
              </span>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={Email || ""}
                placeholder="Ingrese su Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-danger " id="basic-addon1">
                Contraseña:{""}
              </span>
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  setContrasena(event.target.value);
                }}
                value={Contrasena || ""}
                placeholder="Ingrese su contraseña"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-danger me-md-2"
                type="button"
                onClick={guardar}
              >
                Guardar
              </button>
            </div>
            </div>
            </div>
            </>
  )
}
