import { useEffect, useState } from "react";
import { useAuth } from "../../auth/context/AuthContect";
import { Home } from "../../peliculas/pages/home";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Idgenero } from "../../peliculas/helpers/GetidGeneros";


export const Navbar = ({ setbuscarP, setGenero }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const buscar = () => {
    setbuscarP(pB);
    navigate("Home");
  };
  const [pB, setPB] = useState("");
  const [idgenero, setidgenero] = useState(0);
  const [namegenero, setnamegenero] = useState("generos");
  const [listgenero, setlisgenero] = useState([]);

  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  useEffect(() => {
    Idgenero(setlisgenero);
  }, [1]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
        <i className="fi fi-rr-user"></i>
          <label className="nav-link active" aria-current="page" to="/Home">
            {user.displayName}
          </label>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item col-1 mx-2">
              <button
                className="btn btn-outline-secondary dropdown-toggle "
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
                        className="dropdown-item"
                        key={val.id}
                        onClick={() => {
                          setGenero(val.id);
                          setnamegenero(val.name);
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
            />
            <button className="btn btn-outline-success mx-2" onClick={buscar}>
              Search
            </button>
          </div>

          <button
            onClick={() => handleLogout()}
            className="btn btn-outline-success"
          >
            Cerrar sesion
          </button>
        </div>
      </div>
    </nav>
  );
};
