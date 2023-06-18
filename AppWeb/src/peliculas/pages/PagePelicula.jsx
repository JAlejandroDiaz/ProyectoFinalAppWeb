import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom"
import {BuscarId} from  "../../peliculas/helpers/BuscarId"
export const PagePelicula = () => {
  const {movieId} = useParams()
  
  useEffect(() =>{
    BuscarId(movieId, setmovie)
    console.log(movie)
  })  
  // console.log(movieId)
  
  const [movie, setmovie] = useState("")
  
  const URL_IMAGEN = "https://image.tmdb.org/t/p/original";
  return (<>
  {/* <img src={`${URL_IMAGEN +poster_path}` } /> */}
  
  </>
    
  )
}
