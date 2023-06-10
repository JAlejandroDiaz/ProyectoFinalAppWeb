import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useFetcher } from 'react-router-dom'


export const Home = () => {
    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '8bac5a6f224724e60995c6b33cf11019'
    const Imagen_path = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGEN = 'https://image.tmdb.org/t/p/original'
    const [movies, setmovies] = useState([])
    const [buscarkey, setbuscarkey] = useState("")
    const [movie, setmovie] = useState({
        tittle: 'loadingMovie'

    })
    const [playing, setplaying] = useState(false)

    //conexion
    const fetchMovies = async (buscarkey) => {
        const type = buscarkey ? 'search' : 'discover'
        const { data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`,
            {
                params: {
                    api_key: API_KEY,
                    query: buscarkey,

                },
            })
       
        setmovies(results)
        setmovie(results[0])
        console.log(JSON.stringify(movies))
            
        
    }


    useEffect(() => {
        fetchMovies()
    },[])
    return (
        <>

            {/* <button onClick={fetchMovies}>Presione</button>    */}

            <div className="container mt-3" >
                <div className="row">
                    {
                        movies.map((movie) => {
                            <div className="col-md-4 mb-3" key={movie.id}>
                                <h1>{movie.original_title}</h1>
                                <img src={`${URL_IMAGEN + movie.poster_path}`} alt="Imagen no encontrado" />
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    )
}
