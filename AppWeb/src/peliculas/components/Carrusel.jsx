import React, { useEffect, useState } from "react";
import { buscarGenero } from "../helpers/buscarporgenero";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

export const Carrusel = ({ idgenero }) => {
  const [movies, setmovies] = useState([]);
  const [id, setid] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (idgenero !== id) {
      setid(idgenero);
      buscarGenero(setmovies, idgenero);
    }
  }, [idgenero, id]);

  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  const handleRedirect = (id) => {
    navigate(`/Movie/${id}`);
  };

  return (
    <>
      {movies.length !== 0 ? (
        <div
          id={`carouselExampleCaptions-${idgenero}`}
          className="carousel slide h-100 w-100"
        >
          <div className="carousel-indicators">
            {movies.map((movie, index) => (
              <button
                key={index}
                type="button"
                data-bs-target={`#carouselExampleCaptions-${idgenero}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {movies.map((movie, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <button
                  onClick={() => handleRedirect(movie.id)}
                >
                  <img
                    src={`${URL_IMAGEN + movie.poster_path}`}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </button>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carouselExampleCaptions-${idgenero}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carouselExampleCaptions-${idgenero}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        undefined
      )}
    </>
  );
};
