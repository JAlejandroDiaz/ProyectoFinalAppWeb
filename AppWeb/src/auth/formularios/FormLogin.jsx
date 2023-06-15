import { useState, useContext } from "react";
import { useAuth, authContext } from "../context/AuthContect";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const auth = useAuth();

  const login = () => {
    navigate("/Home");
  };

  if (!auth.email) {
    // console.log("no hay nada")
  } else {
    // console.log("si hay algo")
  }

  const { displayName } = auth.user;
  //console.log(displayName);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // console.log(email, password, "FromLogin");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
   
    login();
  };

  return (
      <div className=" container d-flex justify-content-center align-items-center vh-100  ">
        <div className="row justify-content-center ">
            <form>
              <div className="mb-3">
                <label form="exampleInputEmail1" className="form-label">
                  Email{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label form="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" form="exampleCheck1">
                  Check me out
                </label>
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
                Iniciar con google
              </button>
            </form>
          </div>
        </div>
      
   
  );
};
