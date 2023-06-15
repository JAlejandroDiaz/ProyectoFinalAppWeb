import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { EquipoCard } from "../components/EquipoCard";
import { BuscarIndividual } from "../helpers/BuscarIndividual";
export { PeliculaRoute } from "../routes/PeliculaRoute"
import { Navbar } from "../../ui/components/Navbar";
import { PeliculaRoute } from ".";

export const Home = ({buscarPeli}) => {
  // const API_URL = "https://api.themoviedb.org/3";
  // const API_KEY = "8bac5a6f224724e60995c6b33cf11019";
  // const Imagen_path = "https://image.tmdb.org/t/p/original";
  // const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  const [movies, setmovies] = useState([]);
  const [buscarP, setbuscarP] = useState();
  const [movie, setmovie] = useState({
    tittle: "loadingMovie",
  });

  // const [playing, setplaying] = useState(false);

  // //conexion
  // const fetchMovies = async (buscarkey) => {
  //   const type = buscarkey ? "search" : "discover";
  //   const {
  //     data: { results },
  //   } = await axios.get(`${API_URL}/${type}/movie`, {
  //     params: {
  //       api_key: API_KEY,
  //       query: buscarkey,
  //     },
  //   });
  //   console.log(results)
  //   setmovies(results);
  //   setmovie(results[0]);
  // };
  
  //  if(buscarPeli.buscarPeli !== undefined){
  //   setbuscarP(buscarPeli.buscarPeli)
  //   setbuscarPelicula(undefined)
  //  }
   useEffect(()=>{
    setbuscarP(buscarPeli)
   },[buscarPeli])
    

  
  

  useEffect(() => {
    BuscarIndividual(setmovies, setmovie, buscarP);
  }, [buscarP]);
  return (
    <>
      {/* <button onClick={nav}>Presione</button>    */}
      {/* {<Navbar setbuscarP={setbuscarP}/>} */}
      <div className="container mt-3 ">
        <div className="row">
          {movies.map((movie) => {
            return (
              <Fragment key={movie.id}>
                {movie.poster_path ? (
                  <div className="col-md-3 mb-3 mx-auto" >
                    <EquipoCard  {...movie} />
                  </div>
                ) : undefined}
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
