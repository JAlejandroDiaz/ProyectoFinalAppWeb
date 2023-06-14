import React, { useEffect, useState } from "react";
import axios from "axios";



export function BuscarIndividual(setmovies, setmovie, buscarP){
  
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "8bac5a6f224724e60995c6b33cf11019";
  const Imagen_path = "https://image.tmdb.org/t/p/original";
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  // const [buscarkey, setbuscarkey] = useState("");
  // const [playing, setplaying] = useState(false);
  
  console.log(buscarP)
  //conexion
  const fetchMovies = async (buscarkey) => {
    console.log(buscarkey)
    const type = buscarkey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: buscarkey,
      },
    });
    console.log(results)
    setmovies(results);
    setmovie(results[0]);
  };

  if(buscarP !== undefined){
    fetchMovies(buscarP) 
  }else{
    fetchMovies() 
  }


    

  // useEffect(() => {
  //   fetchMovies("");
  // }, []);

}
