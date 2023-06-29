import { useState, useContext, useEffect } from "react";

import { useAuth, authContext } from "../context/AuthContect";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FechaLanzamineto } from "../../peliculas/helpers/FechaLanzamineto";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const auth = useAuth();
  const [movie, setmovie] = useState("");
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  const movieId = 447365;

  const login = () => {
    navigate("/Home");
  };

  useEffect(() => {
    FechaLanzamineto(movieId, setmovie);
  }, [movieId]);

  const containerStyle = {
    backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.91), rgba(0,0,0,0.5)),url(${URL_IMAGEN}/${movie.poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  
  const { displayName } = auth.user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if(email !== "" && password !== ""){

      auth.login(email, password);
    }else{
      alert("Complete los campos")
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();

    login();
  };

  return (
    <div style={containerStyle}>
      <div className="grid-container">
        <div className="column"></div>
        <div className="column">
          <div className=" container d-flex justify-content-center align-items-center vh-100  ">
            <div className="row justify-content-center ">
              <form>
                <div>
                  <label className="mb-5">INICIA SESION</label>
                </div>
                <div className="mb-3">
                  <label form="exampleInputEmail1" className="form-label">
                    Correo{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa el correo "
                  />
                </div>
                <div className="mb-3">
                  <label form="exampleInputPassword1" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control inputt"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa la contrseña"
                  />
                </div>

                <button
                  onClick={(e) => handleLogin(e)}
                  className="btn btn-primary mx-3"
                >
                  Inicia sesión
                </button>
                <button
                  onClick={(e) => handleGoogle(e)}
                  className="btn btn-warning"
                >
                  <FaGoogle className="mx-2" />
                  Iniciar con google
                </button>
                
              </form>
              <label htmlFor="">Estas Registrado? <Link to='/SingUp'>registrar</Link> </label>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
