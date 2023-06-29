import React, { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BuscarId } from "../../peliculas/helpers/BuscarId";
//import { firebase } from "../../firebase/firebase.confing";
import { db } from "../../firebase/firebase.confing";
import "./Style.css";
import { Crearcomentario } from "./Crearcomentario";
import { Comentarios } from "./Comentarios";
//NOmbre Usuario
import { useAuth } from "../../auth/context/AuthContect";
import { Carrusel } from "../components/Carrusel";
import "./Style.css"

export const PagePelicula = () => {
  const { movieId } = useParams();
  const [movie, setmovie] = useState("");
  const [genero, setgenero] = useState([]);
  const [ListaLinks, setListaLinks] = useState([]);
  const [ListaComentarios, setListaComentarios] = useState([]);
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  const [selectMenu, setselectMenu] = useState(false);

  const { user } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  useEffect(() => {
    const comentario = async () => {
      const docRef = db.collection("Comments");
      docRef
        .where("id_pel", "==", movieId)
        .get()
        .then(function (querySnapshot) {
          const listaComentario = [];
          querySnapshot.forEach(function (doc) {
            listaComentario.push(doc.data());
          });
          setListaComentarios(listaComentario);
        })
        .catch(function (error) {
          console.log("Error al obtener los datos: ", error);
        });
    };
    comentario();
  }, [selectMenu]);

  useEffect(() => {
    BuscarId(movieId, setmovie, setgenero);
    const ensayo = async () => {
      try {
        const docRef = db.collection("Peliculas").doc(movieId);
        const doc = await docRef.get();

        if (doc.exists) {
          const data = doc.data();
          // console.log(data);
          setListaLinks(Object.values(data));
          // if (data.hasOwnProperty("pelicula") && data.pelicula.hasOwnProperty("link1") && data.pelicula.link1) {
          //   const link1 = data.pelicula.link1;
          //   console.log(link1);
          // } else {
          //   console.log("El campo link1 no está presente en el objeto pelicula del documento o su valor es undefined.");
          // }
        } else {
          console.log("Este dato no existe!");
        }
      } catch (error) {
        console.log("Error al obtener el documento:", error);
      }
    };
    ensayo();
  }, [movieId]);
  // console.log(movieId)
  // console.log(movie);

  const containerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,2)),url(${URL_IMAGEN}/${movie.poster_path})`,
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
    
     <div className="body mb-5">
      <div style={containerStyle}>
        <div className="container">
          <div className="grid-container">
            <div className="grid-item column1">
              <div className=" " style={{ width: "24rem" }}>
                <img
                  src={`${URL_IMAGEN}/${movie.poster_path}`}
                  className="card-img  rounded-4 "
                  alt="..."
                />
              </div>
            </div>
            <div className="grid-item column2">
              <h1>{movie.original_title}</h1>
              <h4 className="mt-3">Fecha de lanzamiento:</h4>
              <h4 className="mt-1">{movie.release_date}</h4>
              <div className="categorias mt-3">
                {genero.map((val, i) => {
                  return (
                    <label className=" btn-oval" key={i}>
                      {val.name}
                    </label>
                  );
                })}
              </div>

              <h4 className="mt-5">Descripcion</h4>
              <p>{movie.overview}</p>
              <h4>Puntuacion general</h4>
              <label className="mt-3 botonCircilar">{movie.vote_average}</label>

              {ListaLinks.map((val) => {
                return (
                  <div key={val.id_pel}>
                    <a
                      className="btn btn-dark border-white mx-2 my-2"
                      onClick={() => {
                        window.open(val.link1, "-blank");
                      }}
                    >
                      opcion #1
                    </a>
                    <a
                      className="btn btn-light border-black mx-2 my-2"
                      onClick={() => {
                        window.open(val.link2, "-blank");
                      }}
                    >
                      opcion #2
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     
      <div className="container mt-5 mb-2 ">
        <div className="comment-box">
          <div className="row">
            <div className="col-6 d-flex justify-content-center ">
              <button
                className="btn btn-dark border-white my-1"
                onClick={() => {
                  setselectMenu(false);
                }}
              >
                Comentarios
              </button>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <button
                className="btn btn-light border-black my-1"
                onClick={() => {
                  setselectMenu(true);
                }}
              >
                Aportar
              </button>
            </div>
          </div>
        </div>
      </div>

      
        <div
          style={{
            width: "100%",
            overflow: "auto",
            maxHeight: "300px",
            overflowY: "scroll",
          }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-12">
                <div className="card bg-dark text-ligth ">
                  {selectMenu === false ? (
                    <>
                      {ListaComentarios.map((val, i) => {
                        return (
                          <Fragment key={i}>
                            <Comentarios {...val} />
                          </Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <Crearcomentario
                        Usuario={user.displayName}
                        NombrePelicula={movieId}
                        selectMenu={setselectMenu}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" mx-5 my-5 d-flex justify-content-center text-light"><h2>Te puede interesar </h2></div>
        <div className="container  d-flex justify-content-center text-light">
         
          <div className="row">
            {/* <div className="col-4 mb-5"> */}
              {
                genero.map((gen)=>{
                  return(
                    <div className="col-4 mb-5" key={gen.id}>
                      <h3>{gen.name}</h3>
                      <Carrusel key={gen.id} idgenero={gen.id} />
                    </div>
                  )
                })
              }
              {/* {genero.length > 0 ? (<>
              <h3>{genero[0].name}</h3>
                <Carrusel key={genero[0].id} idgenero={genero[0].id} />
                </>) : undefined}
            </div>
            <div className="col-4 mb-5">
             
              {genero.length > 1 ? (<>
                <h3>{genero[1].name}</h3>
                <Carrusel key={genero[1].id} idgenero={genero[1].id} />
                </>) : undefined}
            </div>
            <div className="col-4 mb-5">
             
              {genero.length > 2 ? (<>
                <h3>{genero[2].name}</h3>
                <Carrusel key={genero[2].id}idgenero={genero[2].id} />
                </>) : undefined} */}
            {/* </div> */}
          </div>
        </div>
       </div>
    
  );
};
