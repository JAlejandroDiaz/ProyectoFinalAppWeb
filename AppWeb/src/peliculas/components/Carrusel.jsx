import React, { useEffect, useState } from "react";
import { buscarGenero } from "../helpers/buscarporgenero";

export const Carrusel = ({ idgenero }) => {
  const [movies, setmovies] = useState([]);
  const [id, setid] = useState();
  useEffect(() => {
    if(idgenero !== id){
        console.log("entro")
         setid(idgenero)
        buscarGenero(setmovies,idgenero)
    }
    console.log(movies)
   
  },[1]);
  
  const tamano = movies.length
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";

  return (<>
    { tamano !== 0 ? 
    
        <div id="carouselExampleCaptions" className="carousel slide  h-100 w-100  ">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${URL_IMAGEN + movies[1].poster_path}`} className="d-block  w-100 " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={`${URL_IMAGEN + movies[2].poster_path}`} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={`${URL_IMAGEN + movies[3].poster_path}`} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
        : undefined}
        </>
  );
};
