import { useState } from "react";
import { useAuth } from "../../auth/context/AuthContect";
import { Home } from "../../peliculas/pages/home";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export const Navbar = ({setbuscarP}) => {
const navigate = useNavigate()
  const buscar= () =>{
    setbuscarP(pB)
    navigate("Home")
  }
  const [pB, setPB]= useState("") 
   
  

    const auth = useAuth()
    const handleLogout =() =>{
        auth.logout()}

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Hidden brand</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <div className="d-flex" >
        <input onChange={(val)=>{
            setPB(val.target.value) 
          }} 
          className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success mx-2"  onClick={buscar} >Search</button>
        </div>
        

        <button onClick={() => handleLogout()} className="btn btn-outline-success">Cerrar sesion</button>

      </div>
     
    </div>
  </nav>
  
        
  )
}
