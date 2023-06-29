import { useAuth, authContext } from "../context/AuthContect";
import { useNavigate } from "react-router-dom";
import { FechaLanzamineto } from "../../peliculas/helpers/FechaLanzamineto";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export const FormSinUp = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [movie, setmovie] = useState("");
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  const movieId = 447365;

    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const handleRegister = (e) => {
        e.preventDefault()
        if(emailRegister !== "" && passwordRegister !== ""){
            auth.register(emailRegister, passwordRegister)
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 5000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })
            login()
            
        }else{
          Swal.fire({
            title: 'Error',
            text: "Ingrese los campos",
            icon: 'warning',
            timer: 1000,
          })
        }
        
    }

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

  


  return (
    <div style={containerStyle}>
      <div className="grid-container">
        <div className="column"></div>
        <div className="column">
          <div className=" container d-flex justify-content-center align-items-center vh-100  ">
            <div className="row justify-content-center ">
              <form>
                <div>
                  <label className="mb-5">REGISTRATE</label>
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
                    onChange={(e) => setEmailRegister(e.target.value)}
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
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    placeholder="Ingresa la contrseña"
                  />
                </div>

                <button
                  onClick={(e) => handleRegister(e)}
                  className="btn btn-primary mx-3"
                >
                  Registrar
                </button>
                
              </form>
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};



