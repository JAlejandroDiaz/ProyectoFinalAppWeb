import { useState } from "react";
import { useAuth } from "../../context/AuthContect";
import { Home } from "../../peliculas/pages/home";

export const Navbar = () => {

  const buscar= () =>{
    <Home busqueda={pB}/>

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
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input onChange={val=>{
            setPB(val.target.value)
          }} 
          className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          
        </form>
        {/* Cambiado por anderson */}
        <button className="btn btn-outline-success mx-2" type="submit"  onClick={buscar} >Search</button>

        <button onClick={() => handleLogout()} className="btn btn-outline-success">Cerrar sesion</button>

      </div>
    </div>
  </nav>
  
        
  )
}
