import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/context/AuthContect";
import { Home } from "../../peliculas/pages/home";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Idgenero } from "../../peliculas/helpers/GetidGeneros";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import './styleNV.css';
import Swal from 'sweetalert2';

export const Navbar = ({ setbuscarP, setGenero }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [pB, setPB] = useState("");
  const [idgenero, setidgenero] = useState(0);
  const [namegenero, setnamegenero] = useState("generos");
  const [listgenero, setlisgenero] = useState([]);
  const buscar = () => {
    setbuscarP(pB);
    navigate("Home");
  };

  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    
    navigate("login")
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hasta Pronto .',
      showConfirmButton: false,
      timer: 1500
    })
  };
  useEffect(() => {
    Idgenero(setlisgenero);
  }, [1]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <label className="nav-link active text-light mx-1" id="nameUsuario" aria-current="page" to="/Home"  >
          <FontAwesomeIcon icon={faUserSecret} className="mx-1" id="iconUsers"/>
            {user.displayName}
          </label>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active my-1 mx-1 marginLeft" id="home" aria-current="page" to="/Home"
              onClick={()=>{
                setGenero(undefined)
                setbuscarP(undefined)
                setnamegenero("generos")
                
              }}>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            
            <li className="nav-item col-1 mx-2 my-2">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                id="genero"
                name="genero"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {namegenero}
              </button>
              {
                <ul className="dropdown-menu">
                  {listgenero.map((val) => {
                    return (
                      <li
                        className="dropdown-item my-10"
                        key={val.id}
                        onClick={() => {
                          setGenero(val.id);
                          setnamegenero(val.name);
                          navigate("Home");
                        }}
                      >
                        {val.name}
                      </li>
                    );
                  })}
                </ul>
              }
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <div className="d-flex">
            <input
              onChange={(val) => {
                setPB(val.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              defaultValue={pB}
            />
            <button className="btn btn-outline-light mx-2" onClick={buscar}>
              Search
            </button>
          </div>

          <button
            onClick={() => handleLogout()}
            className="btn btn-outline-light"
          >
            Cerrar sesion
          </button>
        </div>
      </div>
    </nav>
  );
};
