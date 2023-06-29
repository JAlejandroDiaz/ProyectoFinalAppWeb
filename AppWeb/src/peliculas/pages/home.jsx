import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { EquipoCard } from "../components/EquipoCard";
import { BuscarIndividual } from "../helpers/BuscarIndividual";
export { PeliculaRoute } from "../routes/PeliculaRoute";
import { Navbar } from "../../ui/components/Navbar";
import { PeliculaRoute } from ".";
import "./Style.css";
import { buscarGenero } from "../helpers/buscarporgenero";
import { Idgenero } from "../helpers/GetidGeneros";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Home = ({ buscarPeli, IDgenero }) => {
  // const API_URL = "https://api.themoviedb.org/3";
  // const API_KEY = "8bac5a6f224724e60995c6b33cf11019";
  // const Imagen_path = "https://image.tmdb.org/t/p/original";
  // const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  const [movies, setmovies] = useState([]);
  const [buscarP, setbuscarP] = useState();
  const [movie, setmovie] = useState({
    tittle: "loadingMovie",
  });
  const [idgenero, setidgenero] = useState();
  const [namegenero, setnamegenero] = useState();
  const [listgenero, setlisgenero] = useState([]);
  const [page, setpage] = useState(1);
  // useEffect(()=>{
  //  // console.log(IDgenero)
  //   Idgenero(setlisgenero);
  // },[1])
  
  useEffect(() => {
    setbuscarP(buscarPeli);
    setidgenero(IDgenero);
    if(IDgenero === undefined){
      setpage(1)
    }
  }, [buscarPeli, IDgenero]);
//   useEffect(()=>{
//     setpage(1)
//  },[idgenero])

  useEffect(() => {
    if (idgenero !== undefined) {
      buscarGenero(setmovies, idgenero);
    } else {
      BuscarIndividual(setmovies, setmovie, buscarP, page);
    }
  }, [buscarP, idgenero, page]);

  return (
    <div className="body  mt-5">
      <div className="container mt-3 ">
        <div className="row">
          {movies.map((movie) => {
            return (
              <Fragment key={movie.id}>
                {movie.poster_path ? (
                  <div className="col-md-3 mb-3 mx-auto">
                    <EquipoCard {...movie} />
                  </div>
                ) : undefined}
              </Fragment>
            );
          })}
        </div>
      </div>
      {idgenero === undefined? <div className="p-4 d-flex justify-content-center align-items-center">
        <button className="btn btn-transparent btn-lg" onClick={() => {
            setpage(page - 1);
          }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <span className=" fw-bold fs-4" >{page}</span>
        <button
          className="btn btn-transparent btn-lg"
          onClick={() => {
            setpage(page + 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>: undefined}
      
    </div>
  );
};
