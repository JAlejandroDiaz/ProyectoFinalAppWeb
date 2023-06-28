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
  const [idgenero, setidgenero] = useState(IDgenero || 0)
  const [namegenero, setnamegenero] = useState()
  const [listgenero, setlisgenero] = useState([])
  useEffect(()=>{
    Idgenero(setlisgenero);
  },[1])


  // useEffect(() => {
  //   setbuscarP(buscarPeli);
  // }, [buscarPeli]);

  useEffect(() => {
    if(idgenero !== 0){

      buscarGenero(setmovies, idgenero);
    }else{

      BuscarIndividual(setmovies, setmovie, buscarP);
    }
  }, [buscarP,IDgenero]);
  
  return (
    <div className="body">
      {/* <button
        className="btn btn-outline-secondary dropdown-toggle col-2"
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
        {
          listgenero.map((val)=>{
            return(<li className="dropdown-item" key={val.id}
            onClick={()=>{
              setidgenero(val.id)
              setnamegenero(val.name)
            }}>
                {val.name}
           </li>)
          }) 
        }
        
      </ul>} */}

      {/* <button onClick={nav}>Presione</button>    */}
      {/* {<Navbar setbuscarP={setbuscarP}/>} */}
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
    </div>
  );
};
