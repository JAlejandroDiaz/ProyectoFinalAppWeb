import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BuscarId } from "../../peliculas/helpers/BuscarId";
import "./Style.css";
export const PagePelicula = () => {
  const { movieId } = useParams();
  const [movie, setmovie] = useState("");
  const [genero, setgenero] = useState([])
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";



  useEffect(() => {
    BuscarId(movieId, setmovie , setgenero);
    

  }, [movieId]);
  // console.log(movieId)
  console.log(movie);

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
    <>
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
                {
                    genero.map((val,i)=>{
                      return(
                        <label className=" btn-oval"  key={i}>{val.name}</label>
                      )
                    })
                }
              </div>
              
            <h4 className="mt-5">Descripcion</h4>
            <p>{movie.overview}</p>
            <h4>Puntuacion general</h4>
            <label className="mt-3 botonCircilar">{movie.vote_average}</label>
                
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
